// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SmartContract is ERC1155, Ownable {
    
    using Strings for uint256;

    string public name;
    string public symbol;
    string private baseURI;
    address private rewardContract;
    uint256 public tokenTypeCounter = 0;
    
    bool public paused = false;

    bool public referralProgram = true;
    uint256 public referralRequirement = 10;
    uint256 public referralRate = 10;

    mapping(uint256 => bool) public allowTokenMintByID;
    mapping(uint256 => bool) public tokenExistsByID;
    mapping(uint256 => uint256) public tokenSupplyByID;
    mapping(uint256 => uint256) public tokenMintedByID;
    mapping(uint256 => uint256) public tokenPriceByID;

    // Cyber Heist Gang Hierarchy
    uint256 public orgSize = 0;
    mapping(address => uint256) public gangID;
    mapping(string => address) public codeName;
    mapping(address => bool) public gangActive;
    mapping(address => uint256) public sales;
    mapping(address => uint256) public commission;
    mapping(address => bool) public isLeader;
    mapping(address => uint256) public teamSize;
    mapping(address => mapping(uint256 => address)) public teamMember;
    mapping(address => address) public leaderOf;

    constructor(string memory _baseURI) ERC1155("") {
        baseURI = _baseURI;
        name = "Cyber Heist";
        symbol = "CYBERHEIST";
    }

    function createNewToken(address _to, uint256 newID, uint256 newTokenSupply, uint256 _amount, uint256 tokenPrice, bool allowMint) external onlyOwner {
        require(newID > 0, "Token ID must start from 1.");
        require(!tokenExistsByID[newID], "Token already exists.");
        tokenSupplyByID[newID] = newTokenSupply;
        require(_amount <= tokenSupplyByID[newID], "Cannot mint more than supply.");
        _mint(_to, newID, _amount, "");
        tokenExistsByID[newID] = true;
        tokenTypeCounter++;
        tokenMintedByID[newID] = _amount;
        tokenPriceByID[newID] = tokenPrice;
        allowTokenMintByID[newID] = allowMint;
    }

    function mint(address _to, uint256 id, uint256 _amount) public payable {
        require(!paused, "Minting paused.");
        require(tokenExistsByID[id], "Token doesn't exist.");
        require(_amount > 0, "Must mint more than 1 token.");
        if (allowTokenMintByID[id] == true) {
            require(tokenMintedByID[id] + _amount <= tokenSupplyByID[id], "Not enough supply.");
            require(msg.value >= tokenPriceByID[id] * _amount, "Transaction is underpriced.");
            _mint(_to, id, _amount, "");
            tokenMintedByID[id] += _amount;
        } else {
            require(msg.sender == rewardContract, "Not allowed to mint.");
            _mint(_to, id, _amount, "");
        }
    }

    function referralMint(address to, uint256 id, uint256 _amount, address _referral) public payable {
        mint(to, id, _amount);
        if (referralProgram == true 
        && _referral != msg.sender 
        && _amount >= referralRequirement) {
            uint256 referralReward = (_amount-(_amount%referralRate))*referralRate/100;
            _mint(_referral, id, referralReward, "");
            tokenMintedByID[id] += referralReward;
        }
    }

    function memberMint(address to, uint256 id, uint256 _amount, address gangMemberAddress) public payable {
        mint(to, id, _amount);
        sales[gangMemberAddress] += _amount;
        if (gangActive[gangMemberAddress] == true) {
            uint256 salesAmount = tokenPriceByID[id] * _amount;
            require(payable(gangMemberAddress).send(salesAmount*commission[gangMemberAddress]/100));
        }
    }

    function memberReferralMint(address to, uint256 id, uint256 _amount, address _referral, address gangMemberAddress) public payable {
        referralMint(to, id, _amount, _referral);
        sales[gangMemberAddress] += _amount;
        if (gangActive[gangMemberAddress] == true) {
            uint256 salesAmount = tokenPriceByID[id] * _amount;
            require(payable(gangMemberAddress).send(salesAmount*commission[gangMemberAddress]/100));
        }
    }

    function burn(address burnAddress, uint256 id, uint256 burnAmount) public virtual {
        require(tokenExistsByID[id], "Token doesn't exist.");
        require(burnAddress == msg.sender || isApprovedForAll(burnAddress, msg.sender), "ERC1155: caller is not owner nor approved");
        _burn(burnAddress, id, burnAmount);
    }

    function updateBaseURI(string memory newURI) external onlyOwner {
        baseURI = newURI;
    }

    function uri(uint id) public view override returns (string memory) {
        return
        bytes(baseURI).length > 0
            ? string(abi.encodePacked(baseURI, id.toString()))
            : baseURI;
    }

    function addGangMember(address[] memory wallet, string[] memory _codeName, uint256 _comm, address leader) external onlyOwner {
        require(wallet.length == _codeName.length, "Number of wallets & names not match.");
        for (uint256 i = 0; i < wallet.length; i++) {
            gangID[wallet[i]] = orgSize+1;
            codeName[_codeName[i]] = wallet[i];
            gangActive[wallet[i]] = true;
            commission[wallet[i]] = _comm;
            leaderOf[wallet[i]] = leader;
            teamSize[leader]++;
            teamMember[leader][teamSize[leader]] = wallet[i];
            orgSize++;
        }
    }

    function addLeader(address wallet, string memory _codeName) external onlyOwner {
        gangID[wallet] = orgSize+1;
        codeName[_codeName] = wallet;
        isLeader[wallet] = true;
        orgSize++;
    }

    function manageLeader(address wallet, bool state) external onlyOwner {
        isLeader[wallet] = state;
    }

    function activateMember(address[] memory wallet, bool _state) external onlyOwner {
        for (uint256 i = 0; i < wallet.length; i++) {
            gangActive[wallet[i]] = _state;
        }
    }

    function setSales(address wallet, uint256 _sales) external onlyOwner {
        sales[wallet] = _sales;
    }

    function setCommission(address wallet, uint256 _commission) external onlyOwner {
        commission[wallet] = _commission;
    }

    function setCodeNameWallet(address wallet, string memory newName) external onlyOwner {
        codeName[newName] = wallet;
    }

    function checkTeamSales(address leaderWallet) public view returns (uint256) {
        uint256 teamSales = 0;
        for (uint256 i = 0; i <= teamSize[leaderWallet]; i++) {
            address teamMemberByIndex = teamMember[leaderWallet][i];
            teamSales += sales[teamMemberByIndex];
        }
        return teamSales + sales[leaderWallet];
    }

    function updateTokenSupply(uint256 id, uint256 newSupply) external onlyOwner {
        tokenSupplyByID[id] = newSupply;
    }

    function updateTokenAllowMint(uint256 id, bool state) external onlyOwner {
        allowTokenMintByID[id] = state;
    }

    function updateTokenMinted(uint256 id, uint256 newQuantity) external onlyOwner {
        tokenMintedByID[id] = newQuantity;
    }

    function updateTokenPrice(uint256 id, uint256 newTokenPrice) external onlyOwner {
        tokenPriceByID[id] = newTokenPrice;
    }

    function setRewardContract(address rewardContractAddress) external onlyOwner {
        rewardContract = rewardContractAddress;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function activateReferralProgram(bool _state) public onlyOwner {
        referralProgram = _state;
    }

    function setReferralRequirement(uint256 _newReferralRequirement) public onlyOwner {
        referralRequirement = _newReferralRequirement;
    }

    function setReferralRate(uint256 _newReferralRate) public onlyOwner {
        referralRate = _newReferralRate;
    }

    function withdraw() public payable onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0);
        require(payable(msg.sender).send(address(this).balance));
    }

    function withdrawERCToken(IERC20 token) external onlyOwner {
        uint256 tokenBalance = token.balanceOf(address(this));
        token.transfer(msg.sender, tokenBalance);
    }
}