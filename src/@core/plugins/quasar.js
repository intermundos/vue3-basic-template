import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'

// TODO later
// const cssSource = 'quasar/src/css/'
//
// const baseCSS = [
//   // 'helpers/string.sass',
//   // 'helpers/math.sass',
//   // 'variables.sass',
//   // 'normalize.sass',
// ]

async function importCss() {
  await import('quasar/src/css/index.sass')
}

export function addQuasar( app ) {

  importCss().then( () => {
    app.use( Quasar, {
      plugins: {}
    } )
  } )

}

// Quasar SASS

// @import './helpers/string.sass'
// @import './helpers/math.sass'
//
// @import './variables.sass'
// @import './normalize.sass'
//
// @import '../components/icon/QIcon.sass'
//
// /* Composables */
// @import '../composables/private/use-panel.sass'
//
// /* Components */
// @import '../components/ajax-bar/QAjaxBar.sass'
// @import '../components/avatar/QAvatar.sass'
// @import '../components/badge/QBadge.sass'
// @import '../components/banner/QBanner.sass'
// @import '../components/bar/QBar.sass'
// @import '../components/breadcrumbs/QBreadcrumbs.sass'
// @import '../components/btn/QBtn.sass'
// @import '../components/btn-dropdown/QBtnDropdown.sass'
// @import '../components/btn-group/QBtnGroup.sass'
// @import '../components/btn-toggle/QBtnToggle.sass'
// @import '../components/card/QCard.sass'
// @import '../components/carousel/QCarousel.sass'
// @import '../components/chat/QChatMessage.sass'
// @import '../components/checkbox/QCheckbox.sass'
// @import '../components/chip/QChip.sass'
// @import '../components/circular-progress/QCircularProgress.sass'
// @import '../components/color/QColor.sass'
// @import '../components/date/QDate.sass'
// @import '../components/dialog/QDialog.sass'
// @import '../components/dialog-bottom-sheet/BottomSheet.sass'
// @import '../components/dialog-plugin/DialogPlugin.sass'
// @import '../components/editor/QEditor.sass'
// @import '../components/expansion-item/QExpansionItem.sass'
// @import '../components/fab/QFab.sass'
// @import '../components/field/QField.sass'
// @import '../components/file/QFile.sass'
// @import '../components/form/QForm.sass'
// @import '../components/img/QImg.sass'
// @import '../components/inner-loading/QInnerLoading.sass'
// @import '../components/input/QInput.sass'
// @import '../components/intersection/QIntersection.sass'
// @import '../components/item/QItem.sass'
// @import '../components/knob/QKnob.sass'
// @import '../components/layout/QLayout.sass'
// @import '../components/linear-progress/QLinearProgress.sass'
// @import '../components/menu/QMenu.sass'
// @import '../components/option-group/QOptionGroup.sass'
// @import '../components/pagination/QPagination.sass'
// @import '../components/parallax/QParallax.sass'
// @import '../components/popup-edit/QPopupEdit.sass'
// @import '../components/pull-to-refresh/QPullToRefresh.sass'
// @import '../components/radio/QRadio.sass'
// @import '../components/rating/QRating.sass'
// @import '../components/responsive/QResponsive.sass'
// @import '../components/scroll-area/QScrollArea.sass'
// @import '../components/select/QSelect.sass'
// @import '../components/separator/QSeparator.sass'
// @import '../components/skeleton/QSkeleton.sass'
// @import '../components/slide-item/QSlideItem.sass'
// @import '../components/slider/QSlider.sass'
// @import '../components/space/QSpace.sass'
// @import '../components/spinner/QSpinner.sass'
// @import '../components/splitter/QSplitter.sass'
// @import '../components/stepper/QStepper.sass'
// @import '../components/tab-panels/QTabPanel.sass'
// @import '../components/table/QTable.sass'
// @import '../components/tabs/QTabs.sass'
// @import '../components/time/QTime.sass'
// @import '../components/timeline/QTimeline.sass'
// @import '../components/toggle/QToggle.sass'
// @import '../components/toolbar/QToolbar.sass'
// @import '../components/tooltip/QTooltip.sass'
// @import '../components/tree/QTree.sass'
// @import '../components/uploader/QUploader.sass'
// @import '../components/video/QVideo.sass'
// @import '../components/virtual-scroll/QVirtualScroll.sass'
//
// /* Directives */
// @import '../directives/Ripple.sass'
// @import '../directives/Morph.sass'
//
// /* Plugins */
// @import '../plugins/Loading.sass'
// @import '../plugins/Notify.sass'
//
// /* Core */
// @import './core/animations.sass'
// @import './core/colors.sass'
// @import './core/elevation.sass'
// @import './core/flex.sass'
// @import './core/helpers.sass'
// @import './core/mouse.sass'
// @import './core/orientation.sass'
// @import './core/positioning.sass'
// @import './core/size.sass'
// @import './core/touch.sass'
// @import './core/transitions.sass'
// @import './core/typography.sass'
// @import './core/visibility.sass'
// @import './core/dark.sass'