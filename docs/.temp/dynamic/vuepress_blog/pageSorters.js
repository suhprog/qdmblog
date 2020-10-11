/**
 * Generated by "@vuepress/plugin-blog"
 */
export default {
  blog: (prev, next) => {
            const dayjs = require('dayjs');
            const prevTime = dayjs(prev.frontmatter.date);
            const nextTime = dayjs(next.frontmatter.date);
            return prevTime - nextTime > 0 ? -1 : 1;
        },
  tag: (prev, next) => {
            const dayjs = require('dayjs');
            const prevTime = dayjs(prev.frontmatter.date);
            const nextTime = dayjs(next.frontmatter.date);
            return prevTime - nextTime > 0 ? -1 : 1;
        },
}