<script lang="ts">
import Muuri from "muuri";

  let canvas = document.getRootNode() as HTMLElement;
  let items = [canvas];

  let grid = new Muuri('.grid',{
    // Initial item elements
    items,
    // Default show animation
    showDuration: 300,
    showEasing: 'ease',
    // Default hide animation
    hideDuration: 300,
    hideEasing: 'ease',
    // Item's visible/hidden state styles
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    },
    // Layout
    layout: {
      fillGaps: false,
      horizontal: false,
      alignRight: false,
      alignBottom: false,
      rounding: false
    },
    layoutOnResize: 150,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',
    /* e.g.
    sortData: {
      foo: function (item, element) {
        return parseFloat(element.getAttribute('data-foo'));
      },
      bar: function (item, element) {
        return element.getAttribute('data-bar').toUpperCase();
      },
    },
    */
    sortData: null,
    // Drag & Drop Options
    dragEnabled: false,
    dragContainer: null,
    dragHandle: null,
    dragStartPredicate: {
      distance: 0,
      delay: 0
    },
    dragAxis: 'xy', // 'x', 'y'
    dragSort: true,
    dragSortHeuristics: {
      sortInterval: 100,
      minDragDistance: 10,
      minBounceBackAngle: 1
    },
    dragSortPredicate: {
      threshold: 50,
      action: 'move',
      migrateAction: 'move'
    },
    dragRelease: {
      duration: 300,
      easing: 'ease',
      useDragContainer: true
    },
    dragCssProps: {
      touchAction: 'none',
      userSelect: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0, 0, 0, 0)',
      touchCallout: 'none',
      contentZooming: 'none'
    },
    dragPlaceholder: {
      enabled: false,
      createElement: null,
      onCreate: null,
      onRemove: null
    },
    dragAutoScroll: {
      targets: [],
      handle: null,
      threshold: 50,
      safeZone: 0.2,
      speed: Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500),
      sortDuringScroll: true,
      smoothStop: false,
      onStart: null,
      onStop: null
    },
    // Classnames
    containerClass: 'muuri',
    itemClass: 'muuri-item',
    itemVisibleClass: 'muuri-item-shown',
    itemHiddenClass: 'muuri-item-hidden',
    itemPositioningClass: 'muuri-item-positioning',
    itemDraggingClass: 'muuri-item-dragging',
    itemReleasingClass: 'muuri-item-releasing',
    itemPlaceholderClass: 'muuri-item-placeholder'
});

grid.on('synchronize', function () {
  console.log('Synced!');
});
grid.on('layoutStart', function (items, isInstant) {
  console.log(items, isInstant);
});
grid.on('layoutEnd', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are
  // destroyed/hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
grid.on('layoutAbort', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are destroyed or
  // hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
grid.on('add', function (items) {
  console.log(items);
});
grid.on('remove', function (items, indices) {
  console.log(items, indices);
});
grid.on('showStart', function (items) {
  console.log(items);
});
grid.on('showEnd', function (items) {
  console.log(items);
});
grid.on('hideStart', function (items) {
  console.log(items);
});
grid.on('hideEnd', function (items) {
  console.log(items);
});
grid.on('filter', function (shownItems, hiddenItems) {
  console.log(shownItems);
  console.log(hiddenItems);
});
grid.on('sort', function (currentOrder, previousOrder) {
  console.log(currentOrder);
  console.log(previousOrder);
});
grid.on('move', function (data) {
  console.log(data);
});
grid.on('send', function (data) {
  console.log(data);
});
grid.on('beforeSend', function (data) {
  console.log(data);
});
grid.on('receive', function (data) {
  console.log(data);
});
grid.on('beforeReceive', function (data) {
  console.log(data);
});
grid.on('dragInit', function (item, event) {
  console.log(event);
  console.log(item);
});
grid.on('dragStart', function (item, event) {
  console.log(event);
  console.log(item);
});
grid.on('dragMove', function (item, event) {
  console.log(event);
  console.log(item);
});
grid.on('dragScroll', function (item, event) {
  console.log(event);
  console.log(item);
});
grid.on('dragEnd', function (item, event) {
  console.log(event);
  console.log(item);
});
grid.on('dragReleaseStart', function (item) {
  console.log(item);
});
grid.on('dragReleaseEnd', function (item) {
  console.log(item);
});
grid.on('destroy', function () {
  console.log('Muuri is no more...');
});



</script>

<main>
  <script src="muuri.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/web-animations-js@2.3.2/web-animations.min.js"></script>
  <div class="grid">
    <div class="item">
      <div class="item-content">
        Item 1
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Item 2
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Item 3
      </div>
    </div>
  </div>
</main>

<style>
.grid {
    position: relative;
  }
  .item {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 5px;
    z-index: 1;
    background: #000;
    color: #fff;
  }
  .item.muuri-item-dragging {
    z-index: 3;
  }
  .item.muuri-item-releasing {
    z-index: 2;
  }
  .item.muuri-item-hidden {
    z-index: 0;
  }
  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
