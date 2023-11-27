import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = ()=> {
    return (
        <div className={styles.container}>
            <div className={styles.selectTitle}>
                <div className={styles.items}>
                    <Link href="/portfolio/illustrations" className={styles.item}>
                        <span className={styles.title}>Ilustrations</span>
                    </Link>
                    <Link href="/portfolio/websites" className={styles.item}>
                        <span className={styles.title}>Website</span>
                    </Link>
                    <Link href="/portfolio/applications" className={styles.item}>
                        <span className={styles.title}>
                            Applications
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;