import React, { PureComponent } from "react";
import { Spring, animated } from "react-spring/renderprops";
import { withStyles } from "@material-ui/core/styles";
import { AdSlot } from "react-dfp";

const windowHeight = window.innerHeight;
const styles = theme => ({
  closeBtnContainer: {
    padding: theme.spacing.unit * 1.5
  },
  closeBtn: {
    display: "flex",
    alignItems: "center",
    height: 40,
    width: 40,
    justifyContent: "center",
    cursor: "pointer",
    willChange: "opacity",
    background: "white",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    borderStyle: "solid",
    "& > span": {
      filter: "drop-shadow(1px 1px 1px #000)",
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
      willChange: "opacity",
      opacity: 0.8,
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shortest
      })
    }
  },
  mask: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    willChange: "opacity"
  },
  mediaLightbox: {
    overflow: "hidden",
    zIndex: theme.zIndex.modal,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 14
  },
  mediaLightBoxSlider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "visible",
    touchAction: "none",
    willChange: "transform, opacity",
    display: "flex",
    justifyContent: "flex-end"
  },
  adSlotContainer: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  adSlot: {
    position: "absolute",
    width: "100%",
    height: "100%",
    "& div": {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  }
});
class InterstitialAd extends PureComponent {
  render() {
    const { classes, adUnitId, hide } = this.props;
    return (
      <div role="dialog" className={classes.mediaLightbox}>
        <div className={classes.mask} />
        <div className={classes.mediaLightBoxSlider}>
          <AdSlot
            renderOutOfThePage
            slotId="123"
            adUnit={adUnitId}
            onSlotRender={this.onSlotRender}
          />
          <div onClick={hide} className={classes.closeBtnContainer}>
            <div className={`${classes.closeBtn}`}>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onSlotRender = e => {
    const adSlotDiv = document.getElementById(e.slotId);
    const iframe = adSlotDiv.getElementsByTagName("iframe")[0];
    iframe.width = "100%";
    iframe.height = "100%";
  };
}
export default withStyles(styles)(InterstitialAd);
