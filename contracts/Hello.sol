pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.7.0;

contract Hello {
    string greeting;

    string[] greetings;

    struct Record {
        string date;
        string name;
        string age;
        string contact;
        string visitReason;
        string isEmergency;
    }

    Record[] record;

   // mapping (address => Record) Records;

   // address[] public recordAccts;

    constructor() public {
        greeting = "hello";
    }

    function setRecord(string memory _date,
        string memory _name,
        string memory _age,
        string memory _contact,
        string memory _visitReason,
        string memory _isEmergency) public {

       // Record memory record = Records[_address];
       Record memory r;
       r.date = _date;
       r.age = _age;
        r.name = _name;
        r.contact = _contact;
        r.visitReason = _visitReason;
        r.isEmergency = _isEmergency;
       

        record.push(r);
        // record.age = _age;
        // record.name = _name;
        // record.contact = _contact;
        // record.visitReason = _visitReason;
        // record.isEmergency = _isEmergency;
        
        // recordAccts.push(_address) -1;

    }

    function getRecord(uint index) public view returns (Record memory) {
        return record[index];
    }

    function getGreeting() public view returns (string[] memory) {
        return greetings;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        greetings.push(_greeting);
    }

    function getLength() public view returns (uint) {
        return record.length;
    }

    function getElement(uint index) public view returns (string memory) {
        return greetings[index];
    }
}
