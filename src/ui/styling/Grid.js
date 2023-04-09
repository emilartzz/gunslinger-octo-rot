class Grid {
  constructor(parent, verticalAlign = "top") {

    const columnWidth = parent.width / parent.numChildren;

    parent.forEachChild((child) => {

      const childIndex = parent.getChildIndex(child);
      child.centerX = childIndex * columnWidth + (child.width / 1.25);
      child.centerY = this.verticalAlign(verticalAlign, parent, child);
    });
  }

  verticalAlign(place, parent, child) {
    switch (place) {
      case "top":
        return child.height / 2 + 2;
      case "center":
        return parent.height / 2 + 2;
      case "bottom":
        return parent.height - child.height / 2;
      default:
        return 0;
    }
  }

}