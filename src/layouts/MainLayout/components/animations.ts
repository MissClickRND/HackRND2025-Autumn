import { stagger, Variants } from "motion/react";

export const navbarVar: Variants = {
    show: {transition: {delayChildren: stagger(.05)}},
    hover: {transition: {delayChildren: stagger(.05)}}
}

export const navButtonTitleVar: Variants = {
    hide: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 0,
        x: 100,
    },
    hover: {
        opacity: 1,
        x: 0,
    },
}