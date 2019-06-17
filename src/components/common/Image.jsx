import React, { Component } from 'react';
import Img from 'gatsby-image';
import './Image.scss';


export default class Image extends Component {
  render() {
    const { image, className = '' } = this.props;
    if (!image) return <div className={`gatsby-image placeholder ${className}`} />;
    if (
      image.localFile && image.localFile.childImageSharp && image.localFile.childImageSharp.fluid
    ) {
      return <Img className={`gatsby-image ${className}`} fluid={image.localFile.childImageSharp.fluid} alt={image.alt || ''} />;
    }
    if (image.url) {
      return <img className={`gatsby-image ${className}`} src={image.url} alt={image.alt || ''} />;
    }
    return <div className={`gatsby-image placeholder ${className}`} />;
  }
}
