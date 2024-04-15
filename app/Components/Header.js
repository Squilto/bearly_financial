"use client"

const Header = () => {
    return (
        <div className="bg-GoldenRod py-3">
            <ul>
                <li>
                    <Link legacyBehavior href="/">
                    <a>
                        <img src="public\bear-icon-vector.jpg" alt="LogoIcon"></img>
                    </a>
                    </Link>
                </li>
                    
                <li>
                    <Link>
                    <a>Financial Calculator</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;