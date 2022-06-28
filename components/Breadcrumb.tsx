import Link from 'next/link'
import { useRouter, withRouter,NextRouter } from 'next/router'
import React, { SetStateAction, useEffect, useState } from 'react'
import styles from '../styles/bc.module.css';

interface WithRouterProps {
    router: NextRouter
}

interface Props extends WithRouterProps{
    crumbsToShow?: string[]
}

function BreadCrumb({router, crumbsToShow}: Props) {
    const isUncontrolled = crumbsToShow !== undefined && crumbsToShow.length > 0;
    const defaultCrumbs = isUncontrolled ? crumbsToShow : [];
    const [crumbs, setCrumbs] = useState<string[]>(defaultCrumbs);

    useEffect(() => {
        if(isUncontrolled){
            setCrumbs(crumbsToShow);
            return;
        };
        let pathCrumbs = router.asPath.split('/').filter(Boolean).map(crumb => crumb[0].toUpperCase() + crumb.slice(1));
        setCrumbs(['Home',...pathCrumbs]);
    
    }, [router.asPath, crumbsToShow, isUncontrolled]);

    if(!(crumbs.length > 1)) return null;

    return (
        <div data-module='breadcrumb' className={styles.BreadCrumb}>
            {
                crumbs.map((crumb,index) => {
                    const path = crumbs.slice(1, index + 1).join('/');
                    return (
                        <Link key={index} replace passHref href={`/${path}`}>
                            <a data-locator='crumblink' >{crumb}  {'>'}</a>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default withRouter(BreadCrumb);