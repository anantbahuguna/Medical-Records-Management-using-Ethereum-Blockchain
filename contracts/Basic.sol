pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.7.0;

contract Basic {
    mapping(address => uint) internal map;

    function add(address _key, uint _value) public {
        map[_key] = _value;
    }

    function remove(address _key) public {
        delete map[_key];
    }
    
    function contains(address _key) public view returns (bool) {
        return map[_key] != 0;
    }
    
    function getByKey(address _key) public view returns (uint) {
        return map[_key];
    }
}