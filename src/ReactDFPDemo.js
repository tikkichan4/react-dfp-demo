import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { DFPSlotsProvider, AdSlot } from "react-dfp";

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
class ReactDFPDemo extends Component {
  state = { visible: true };
  render() {
    return (
      <div>
        <DFPSlotsProvider dfpNetworkId={this.props.networkId}>
          <div className="App">
            <h1>If you see this</h1>
            <h2>AD is closed, error should be logged on console</h2>
            {this.renderOverlay()}
          </div>
        </DFPSlotsProvider>
      </div>
    );
  }
  renderOverlay() {
    const { visible } = this.state;
    const { classes, adUnitId } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <div role="dialog" className={classes.mediaLightbox}>
        <div className={classes.mask} />
        <div className={classes.mediaLightBoxSlider}>
          <AdSlot
            adUnit={adUnitId}
            onSlotRender={this.onSlotRender}
            renderOutOfThePage
          />
          <div onClick={this.hide} className={classes.closeBtnContainer}>
            <div className={`${classes.closeBtn}`}>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  hide = () => {
    this.setState({ visible: false });
  };
  onSlotRender = e => {
    const adSlotDiv = document.getElementById(e.slotId);
    const iframe = adSlotDiv.getElementsByTagName("iframe")[0];
    iframe.width = "100%";
    iframe.height = "100%";
  };
}
export default withStyles(styles)(ReactDFPDemo);
