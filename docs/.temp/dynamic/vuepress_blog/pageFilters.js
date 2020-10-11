/**
 * Generated by "@vuepress/plugin-blog"
 */
export default {
  blog: function (page, id, pid) {
                return page.pid === pid && page.id === id;
            },
  tag: function anonymous(page,id,pid
) {

const keys = ["tags"];
const value = id;
return keys.some(key => {
  const _value = page.frontmatter[key]
  if (Array.isArray(_value)) {
    return _value.some(i => i === value)
  }
  return _value === value
})
    
},
}