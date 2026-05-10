import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
    return (
        <Layout
            title="Senna Dev Archive"
            description="Projects, devlogs, and engineering notes"
        >
            <main
                style={{
                    padding: '80px 24px',
                    maxWidth: '900px',
                    margin: '0 auto',
                }}
            >
                <h1
                    style={{
                        fontSize: '4rem',
                        marginBottom: '16px',
                    }}
                >
                    Senna Dev Archive 🌸
                </h1>

                <p
                    style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        marginBottom: '40px',
                    }}
                >
                    Projects, devlogs, study notes,
                    and engineering thoughts.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/fanview/database-design"
                    >
                        View FanView Docs
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        to="/blog"
                    >
                        Read Blog
                    </Link>
                </div>
            </main>
        </Layout>
    );
}