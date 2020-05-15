pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.7.0;

contract Login {

    struct Patient {
        string password;
        string name;
    }
    mapping(address => Patient) internal patients;

    function add(address _key, string memory password, string memory name) public {
        patients[_key] = Patient(password, name);
    }

    function remove(address _key) public {
        delete patients[_key];
    }
    
    // function contains(address _key) public view returns (bool) {
    //     return patients[_key][0] != '';
    // }
    
    function getByKey(address _key) public view returns (Patient memory) {
        return patients[_key];
    }
}