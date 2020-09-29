import { breakpoint } from '../config/breakpoint';

/**
 * @name small
 */

export const sm = (content: string) => `
    @media (max-width: ${breakpoint.sm}) {
        ${content}
      }
    `;

/**
 * @name medium
 */

export const md = (content: string) => `
    @media (max-width: ${breakpoint.md}) {
        ${content}
      }
    `;

/**
 * @name large
 */

export const lg = (content: string) => `
    @media (max-width: ${breakpoint.lg}) {
        ${content}
      }
    `;

/**
 * @name xl
 */

export const xl = (content: string) => `
    @media (max-width: ${breakpoint.xl}) {
        ${content}
      }
    `;

/**
 * @name custom
 */

export const custom = (size: number, content: string) => `
    @media (max-width: ${size}) {
        ${content}
      }
    `;
