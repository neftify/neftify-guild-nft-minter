// SPDX-License-Identifier: MIT

/**
 * NeftifyGuilds Contract
 * Created by the Neftify Team @ neftify.com
 */

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NeftifyGuilds is ERC721, ERC721Enumerable, Ownable {
    string private _baseURIextended;

    uint256 public constant MAX_SUPPLY = 10000;

    constructor() ERC721("NeftifyGuilds", "NEFTGUILD") {
    }

    /**
     * Mint
     */

    function mint(uint numberOfTokens) public onlyOwner {
        uint256 ts = totalSupply();

        require(ts + numberOfTokens <= MAX_SUPPLY, "Mint would exceed max tokens");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
    }

    /**
     * Utils
     */

    function withdraw() public onlyOwner {
        uint balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}


