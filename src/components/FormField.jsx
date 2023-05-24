import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange
}) => {
  return (
    <>
      <div className="flex items-center max-w-[250px] xs:max-w-xs lg:max-w-sm xl:max-w-screen-md gap-2">
        <label
          htmlFor={name}
          className="text-sm md:text-base lg:text-xl font-bold"
        >
          {labelName}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="w-screen bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none p-3"
        />
      </div>
    </>
  )
}

export default FormField
