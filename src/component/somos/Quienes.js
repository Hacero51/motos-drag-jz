import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Maps from './maps';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function Quienes() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <br />
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <h5>LA VISION</h5>
            <br />
            <p align="justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
          <br />
          <br />
          <div className="col-md-6">
            <h5>LA MISION</h5>
            <br />
            <p align="justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
        </div>
        <br />
        <div className="col-md-6">
          <Maps />
        </div>
        <br />
      </div>
    </>

  )
}

export default Quienes