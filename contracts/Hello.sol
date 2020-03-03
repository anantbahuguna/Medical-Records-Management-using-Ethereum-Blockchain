pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.7.0;

contract Hello {
    string public greeting;

    uint public recordCount = 0;
//     struct Record {
//     //bool providedName;
//     uint id;
//     string name;
//     //address patient;
//     string hospital;
//     uint256 admissionDate;
//     uint256 dischargeDate;
//     string visitReason;
// }
 //mapping (uint => Record) public records;

    string[] public greetings;

    constructor() public {
        greeting = "hello";
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        // greetings.push(_greeting);
    }
}
