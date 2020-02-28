pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.7.0;

contract Hello {
    string greeting;

    string[] greetings;

    constructor() public {
        greeting = "hello";
    }

    function getGreeting() public view returns (string[] memory) {
        return greetings;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        greetings.push(_greeting);
    }
}
