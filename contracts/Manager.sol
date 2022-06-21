//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Manager {

    struct Ticket {
        uint8 status;
        string name;
        string description;
    }

    Ticket[] public tickets;

    function createTicket(string memory _name) external {
        tickets.push(Ticket(0, _name, ""));
    }

    function deleteTicket(uint _index) external {
        require(_index < tickets.length, "index out of bound");

        for (uint i = _index; i < tickets.length - 1; i++) {
            tickets[i] = tickets[i + 1];
        }
         tickets.pop();
    }

    function updateTicketName(uint _index, string memory _name) external {
    tickets[_index].name = _name;
    }

    function updateTicketDescription(uint _index, string memory _description) external {
        tickets[_index].description = _description;
    }

    function updateTicketStatus(uint _index, uint8 _status) external {
        tickets[_index].status = _status;
    }

    function getTickets() external view returns(Ticket[] memory) {
        return tickets;
    }
}