import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectDirectorySections } from "../../redux/directory/directory.selector"

import MenuItem from "../menu-item/menu-item.component"

import styled from "styled-components"

const Directory = ({ sections }) => {
  return (
    <Wrapper>
      {/* 
        Since the destructured map({, , ,}) function is getting longer and longer
        as well as the MenuItem repeating property={property} for each property 
        we can use the spread operator to shorten this procedure
        what you see blow is the same as: 

          this.state.sections.map(({ title, imageUrl, id, size, slug }) => (
          <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} slug={slug}/>))
         */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem auto;
`

export default connect(mapStateToProps)(Directory)
