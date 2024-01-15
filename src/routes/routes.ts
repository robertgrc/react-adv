
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';

import {LazyExoticComponent} from 'react';
import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route{
    path: string;
    component:LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
    children?:Route[]
}

// const LazyPage1 = lazy( ()=>import(/*webpackChunkName:"LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
// const LazyPage2 = lazy( ()=>import(/*webpackChunkName:"LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
// const LazyPage3 = lazy( ()=>import(/*webpackChunkName:"LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes:Route[] =[
    {
        path: '/lazyload',
        component: lazy( ()=>import(/*webpackChunkName:"LazyLayout"*/'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
]
