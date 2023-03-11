import React from 'react';
import {GetModifiers} from "../../utils/classNames";
import {FORM_SECTION_ROW_TYPE, FormSectionRow} from "./constants";
import Input from "../Input";

const componentClass = 'form-section';


interface FormSectionProps {
  rows: FormSectionRow[];
}

function FormSection(props: FormSectionProps) {
  const {
    rows,
  } = props;

  return (
    <div className={componentClass}>
      {rows.map((row, index) => {
        const isFirst = index === 0;
        const isLast = index === rows.length - 1;

        switch (row.type) {
          case FORM_SECTION_ROW_TYPE.INPUT: {
            return (
                <div key={index} className={GetModifiers(componentClass, 'row')}>
                  <Input
                      isStraightBorderBottom={!isLast}
                      isStraightBorderTop={!isFirst}
                      {...row.props}
                  />
                </div>
            )
          }
          case FORM_SECTION_ROW_TYPE.SELECT: {
            return (
                <div key={index} className={GetModifiers(componentClass, 'row')}>
                  <Input
                      isStraightBorderBottom={!isLast}
                      isStraightBorderTop={!isFirst}
                      {...row.props}
                  />
                </div>
            )
          }
          case FORM_SECTION_ROW_TYPE.BISECTED: {
            return (
                <div key={index} className={GetModifiers(componentClass, 'row', [{
                  condition: true,
                  value: 'bisected'
                }])}>
                  {row.children.map((childRow, index) => {
                    const isFirstChild = index === 0;
                    const isLastChild = index === row.children.length - 1;

                    return (
                        <div key={index} className={GetModifiers(componentClass, 'row')}>
                          <Input
                              blockStyle={{
                                borderBottomLeftRadius: !isFirstChild && 0,
                                borderBottomRightRadius: !isLastChild && 0,
                              }}
                              isStraightBorderBottom={!isLast}
                              isStraightBorderTop={!isFirst}
                              {...childRow.props}
                          />
                        </div>
                    )
                  })}
                </div>
            )
          }
        }

        return false;
      })}
    </div>
  );
}

export default FormSection;