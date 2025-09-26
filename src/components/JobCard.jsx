import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="card mb-3 shadow-sm border-0" style={{border:"1px solid #52619fff"}}>
      <div className="card-body d-flex justify-content-between align-items-center">
        {/* Left side: job info */}
        <div>
          <h5 className="card-title mb-1 fw-bold">{job.title}</h5>
          <p className="mb-1 text-muted">
            {job.company} | {job.location}
          </p>
          <p className="mb-0">
            <span className="badge bg-primary me-2">{job.type}</span>
            <span className="badge bg-success">{job.salary}</span>
          </p>
        </div>

        {/* Right side: action */}
        <div>
          <Link to={`/job/${job.id}`} className="btn btn-outline-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
