// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Employer.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Dfreelancer is Employers, Ownable {
    using SafeMath for uint256;

    modifier onlyEmployerOrOwner() {
        require(msg.sender == owner() || employers[msg.sender].registered, "Unauthorized");
        _;
    }

    modifier onlyFreelancerOrOwner() {
        require(msg.sender == owner() || freelancers[msg.sender].registered, "Unauthorized");
        _;
    }

    // ... (existing contract code)

    function depositFunds(uint jobId) public payable onlyEmployerOrOwner {
        // ... (existing code)

        employer.balance = employer.balance.add(msg.value);
        escrowFunds[msg.sender][jobId] = escrowFunds[msg.sender][jobId].add(msg.value);

        emit FundsDeposited(jobId, msg.sender, msg.value);
    }

    function releaseEscrow(uint jobId, address freelancerAddress) public onlyEmployerOrOwner {
        // ... (existing code)

        escrowFunds[msg.sender][jobId] = 0;

        Freelancer storage freelancer = freelancers[freelancerAddress];
        freelancer.balance = freelancer.balance.add(escrowAmount);

        employer.balance = employer.balance.sub(escrowAmount);

        emit FundsReleased(jobId, freelancerAddress, escrowAmount);
    }

    function withdrawEarnings() public onlyFreelancerOrOwner {
        // ... (existing code)

        uint withdrawAmount = freelancer.balance.mul(95).div(100);

        freelancer.balance = 0;

        (bool success, ) = payable(msg.sender).call{value: withdrawAmount}("");
        require(success, "Transfer failed");

        emit WithdrawFund(msg.sender, withdrawAmount);
    }
}
