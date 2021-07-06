import React ,{useState , useEffect} from "react";

function NAV() {
  return (
        <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-muted" href="#">AFGlobal-2021</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link text-warning" href="/view-all-rp">Research Paper </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-warning" href="/view-all-ws">Workshop</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default NAV;
