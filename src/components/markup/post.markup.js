import React from 'react'
import _get from 'lodash/get'
import { JsonLd } from './jsonLd'
import profilePic from '../../assets/picture_of_me.jpg'

export const PostMarkup = ({ post, slug, siteUrl }) => {
  const image = _get(post, 'frontmatter.hero.childImageSharp', {
    image16x9: {},
    image4x3: {},
    image1x1: {},
  })
  return (
    <JsonLd
      content={{
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        headline: post.frontmatter.title,
        editor: 'Antoine Caron',
        genre: 'Tech Blog',
        wordcount: post.wordCount.words,
        url: `${siteUrl}${slug}`,
        mainEntityOfPage: `${siteUrl}${slug}`,
        datePublished: post.frontmatter.dateJson,
        dateCreated: post.frontmatter.dateJson,
        dateModified: post.frontmatter.dateJson,
        description: post.frontmatter.description,
        image: [
          `${siteUrl}${image.image16x9.src}`,
          `${siteUrl}${image.image4x3.src}`,
          `${siteUrl}${image.image1x1.src}`,
        ],
        keywords: post.frontmatter.tags,
        author: {
          '@type': 'Person',
          name: 'Antoine Caron',
          url: `${siteUrl}`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Antoine Caron',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}${profilePic}`,
          },
        },
      }}
    />
  )
}
