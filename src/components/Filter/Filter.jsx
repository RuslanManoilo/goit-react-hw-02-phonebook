import { FilterInput, FilterLabel } from "./Filter.styled";

const Filter = ({onFilterChange}) => {
    return (
        <>
            <FilterLabel htmlFor="filerValue">Find contacts by name</FilterLabel>
            <FilterInput 
                name="filter" 
                id="filerValue"
                type="text" 
                required 
                onChange={onFilterChange}
            />
        </>
    );
};


export default Filter;