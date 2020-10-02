import React from 'react'


export default function Footer() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quam sem, id facilisis odio tempus eu. Curabitur ut facilisis arcu,sed vehicula risus. Ut faucibus ut sapien at dictum. Ut ut elementum sem. Proin vulputate purus mauris.'
    return (
        <>
            <footer>
                <div className="routes-wrap">
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>
                <div className="footer-info">
                    <p>
                        {lorem}
                    </p>
                </div>
            </footer>
        </>
    )
}