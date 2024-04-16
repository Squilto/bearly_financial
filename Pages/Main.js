import React from 'react';
import Layout from '../app/layout.js'

export default function (Main) {
    return (
        <Layout>
            <main className="bg-yellow-990 flex min-h-screen flex-col items-center justify-between p-24">
                <div>
                    <h1>Welcome to Bearly Financial, your firendly neighborhood Bear you can Bank on!</h1>
                </div>
            </main>
        </Layout>
    );
  }