import React from "react";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container small">
        © {new Date().getFullYear()} Amidip Jewellers — All rights reserved.
      </div>
    </footer>
  );
}
