import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { FixedSizeList } from "react-window";

const height = 35;

const MenuList = (props)  => {
    const { options, children, maxHeight, getValue } = props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    return (
      <FixedSizeList
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </FixedSizeList>
    );
}

const CreatableWindowSelect = (props) => {
  return (
    <div>
      <CreatableSelect
            isClearable
            components={{MenuList}}
            {...props}
          />
    </div>
    );
}

export default CreatableWindowSelect;