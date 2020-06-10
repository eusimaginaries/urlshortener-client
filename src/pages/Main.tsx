import React from 'react';
import { Container, Grid, makeStyles, Typography, TextField, Button, InputAdornment, Link } from '@material-ui/core';
import { MainProps, UrlEntry } from '../models';
import { appRoot } from "../env.json";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Main = ({ urlEntry, urlList, inputErr, onSubmitHandler, onInputChangeHandler, onMoreHandler, refreshHandler }: MainProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={onSubmitHandler}>
            <TextField
              error={!!inputErr}
              id="url-input"
              label="Shorten your URL"
              style={{ margin: 8 }}
              placeholder="Insert URL"
              helperText={!!inputErr ? inputErr : 'Provide url to shorten.'}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end"><Button color="primary" variant="contained" type="submit">Generate</Button></InputAdornment>,
              }}
              variant="outlined"
              fullWidth
              onChange={onInputChangeHandler}
            />
          </form>
          {!!urlEntry ? (
            <Typography variant="h3" component="p">
              <Link href={urlEntry.url}>
                {appRoot}/{urlEntry.id}
              </Link>
            </Typography>
          ) : <div />}

        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="p">Saved Entries</Typography>
          {urlList.items.map((u: UrlEntry) => <Typography key={u.id} variant="body1">
            <Link href={u.url}>
              {appRoot}/{u.id} => {u.url}
            </Link>
          </Typography>)}
          {!!urlList.lastKey ? <Button color="primary" onClick={onMoreHandler}>More</Button> : undefined}
          <Button color="secondary" onClick={refreshHandler}>Refresh List</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
