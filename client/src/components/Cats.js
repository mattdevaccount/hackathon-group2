import React from 'react'
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CatCards from './CatCards';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function Cats() {

    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



    return (
        <div className="catBody">
            <Grid container spacing={1}>
                <Grid className="filter"item xs={2}>
                    <aside>
                        <h1>Refine Cat</h1>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <h3>Name</h3>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <h3>Name</h3>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <h3>Name</h3>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <h3>Name</h3>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <h3>Name</h3>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                    </aside>
                </Grid>
            <Grid className="catSelection" item xs={10}>
                    <section>
                        <div className="CatBar" >
                            <p className="alignLeft">9 Result</p>
                            <p className="alignRight">Sort</p>
                            <FormControl className="alignRight" sx={{ m: 1, width: 200 }}>
                                    <Select
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                            {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            <Grid item xs={4}>
                                <CatCards />
                            </Grid>
                            
                        </Grid>
                    </section>
                </Grid>
            </Grid>
        </div>
    )
}
