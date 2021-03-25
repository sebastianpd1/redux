import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

const Directory=({sections})=> (
            <div className= "row">
                {
                    sections.map(({...otherSectionProps}, i)=>(
                        <div key={i} className="col card">
                        <MenuItem {...otherSectionProps}/>
                        </div>  
                    ))
                }

            </div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);