// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Documents
{
    constructor() public {}
    struct Doc
    {
        uint AadharID;
        string HashedValue;
    }
    mapping(uint=>Doc) public documentsinB;
    event documentGenerated(uint _documentID);
    function GenerateDocument(uint _AadharID,string memory _HashedValue) public
    {
        uint Key = _AadharID;
        documentsinB[Key] = Doc(_AadharID,_HashedValue);
        emit documentGenerated(Key);
    }
    function RetrieveData(uint _AadharID)public view returns(uint,string memory)
    {
        uint Key = _AadharID;
        Doc memory retrieved = documentsinB[Key];
        return (retrieved.AadharID,retrieved.HashedValue);
    }
 
}