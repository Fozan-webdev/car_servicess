// src/assets/dummyStyles.js
export const styles = {
  // Common gradient backgrounds
  gradientOrange: "bg-gradient-to-br from-orange-500/20 to-orange-700/20",
  gradientGray: "bg-gradient-to-br from-gray-900/80 to-black/90",
  gradientGrayToGray: "bg-gradient-to-br from-gray-800/50 to-gray-900/80",
  
  // Common borders and transitions
  borderGray: "border border-white/5",
  borderHoverOrange: "hover:border-orange-500/50 transition-all duration-300",
  borderOrange: "border border-orange-500/30",
  
  // Common rounded corners
  rounded2xl: "rounded-2xl",
  roundedXl: "rounded-xl",
  roundedLg: "rounded-lg",
  roundedFull: "rounded-full",
  
  // Common text colors
  textWhite: "text-white",
  textGray: "text-gray-400",
  textGray300: "text-gray-300",
  textOrange: "text-orange-400",
  textRed: "text-red-400",
  
  // Common button styles
  buttonPrimary: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all cursor-pointer",
  buttonSecondary: "bg-white/5 border border-white/10 px-5 py-2.5 text-gray-300 rounded-xl hover:bg-white/10 transition-all cursor-pointer",
  
  // Common input styles
  inputField: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 text-gray-200 rounded-lg",
  
  // Component-specific styles
  statCard: "p-5 w-full max-w-xs",
  carCard: "overflow-hidden duration-300",
  carImage: "w-full h-48 object-cover",
  statusBadge: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
  modalOverlay: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
  noCarsContainer: "text-center py-16 rounded-2xl border border-gray-800 mt-8",
  filterSelect: "p-5 w-full max-w-xs"
};


// src/assets/dummyStyles.js
export const bookStyles = {
  // Common gradient backgrounds
  gradientOrange: "bg-gradient-to-br from-orange-900/30 to-amber-900/30",
  gradientGray: "bg-gradient-to-br from-gray-900/50 to-gray-900/30",
  gradientGrayToGray: "bg-gradient-to-br from-gray-900 to-gray-800",
  gradientGrayToGrayLight: "bg-gradient-to-br from-gray-900/30 to-gray-900/10",
  gradientOrangeToAmber: "bg-gradient-to-br from-orange-800/50 to-amber-800/50",
  gradientOrangeToAmberSolid: "bg-gradient-to-br from-orange-600 to-orange-800",
  
  // Common borders and transitions
  borderGray: "border border-gray-800",
  borderHoverOrange: "hover:border-orange-500/50 transition-all",
  borderOrange: "border border-orange-800/30",
  borderOrangeLight: "border border-orange-800/50",
  
  // Common rounded corners
  rounded2xl: "rounded-2xl",
  roundedXl: "rounded-xl",
  roundedLg: "rounded-lg",
  roundedFull: "rounded-full",
  
  // Common text colors
  textWhite: "text-white",
  textGray: "text-gray-400",
  textGray300: "text-gray-300",
  textOrange: "text-orange-400",
  textRed: "text-red-400",
  textGreen: "text-green-400",
  textAmber: "text-amber-400",
  
  // Common button styles
  buttonPrimary: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all cursor-pointer",
  buttonSecondary: "bg-white/5 border border-white/10 px-5 py-2.5 text-gray-300 rounded-xl hover:bg-white/10 transition-all cursor-pointer",
  buttonSuccess: "bg-gradient-to-r from-green-700/50 to-green-800/50 text-green-300 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg",
  buttonCancel: "bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-gray-200 text-sm px-3 py-1 rounded-lg",
  buttonEdit: "bg-gradient-to-r from-orange-700/50 to-amber-700/50 text-orange-300 hover:text-white text-sm px-3 py-1 rounded-lg",
  
  // Common input styles
  inputField: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 text-gray-200 rounded-lg",
  inputFieldWithIcon: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 pl-10 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
  
  // Status styles
  statusCompleted: "bg-green-900/20 text-green-400",
  statusPending: "bg-amber-900/20 text-amber-400",
  statusActive: "bg-orange-900/20 text-orange-400",
  statusCancelled: "bg-red-900/20 text-red-400",
  statusDefault: "bg-gray-900/30 text-gray-400",
  
  // Component-specific styles
  statCard: "p-5 w-full max-w-xs",
  carCard: "overflow-hidden duration-300",
  carImage: "w-full h-48 object-cover",
  statusBadge: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
  modalOverlay: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
  noItemsContainer: "text-center py-16 rounded-2xl border border-gray-800",
  filterSelect: "p-5 w-full max-w-xs",
  panel: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800",
  specItem: "flex flex-col items-center p-3 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all",
  detailItem: "flex items-start",
  bookingCard: "backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300",
  searchFilterBar: "backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-800"
};


// src/assets/dummyStyles.js
export const AddCarPageStyles = {
  // Page background and layout
  pageContainer: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6",
  fixedBackground: "fixed inset-0 overflow-hidden pointer-events-none",
  gradientBlob1: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob2: "absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob3: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 bg-gradient-to-r from-orange-500 to-orange-700 blur-xl opacity-10",

  // Header
  headerContainer: "relative mb-8 pt-20 text-center",
  headerDivider: "absolute inset-x-0 top-0 flex justify-center",
  headerDividerLine: "h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full",
  title: "text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide font-['Orbitron']",
  titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600",
  subtitle: "text-lg text-gray-400 max-w-2xl mx-auto",

  // Form
  formContainer: "max-w-4xl mx-auto",
  form: "glass-card rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden border border-gray-700",
  formGrid: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  formColumn: "space-y-6",
  formGridInner: "grid grid-cols-1 sm:grid-cols-2 gap-4",

  // Inputs and labels
  label: "block text-sm font-medium text-gray-300 mb-2",
  labelWithIcon: "block text-sm font-medium text-gray-300 mb-2 flex items-center",
  input: "glass-input w-full px-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",
  inputWithPrefix: "glass-input w-full pl-8 pr-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",
  select: "bg-gray-800/50 border border-gray-700 w-full px-4 py-3 rounded-xl text-gray-200 focus:ring-2 focus:ring-orange-500",
  textarea: "glass-input w-full px-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",

  // Radio buttons
  radioContainer: "flex space-x-4",
  radioLabel: (isSelected) => 
    `flex-1 flex items-center justify-center p-3 rounded-xl cursor-pointer transition-all hover:shadow-md ${
      isSelected
        ? "bg-gradient-to-r from-orange-700/30 to-orange-800/30 border border-orange-500/50"
        : "glass-input"
    }`,
  radioInput: "h-4 w-4 text-orange-500 focus:ring-orange-500",
  radioText: "ml-2 text-gray-300",

  // Image upload
  imageUploadContainer: "flex items-center justify-center w-full",
  imageUploadLabel: "flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer glass-input shadow-sm hover:bg-gray-900/30 transition-all",
  imageUploadPlaceholder: "flex flex-col items-center justify-center pt-5 pb-6",
  imageUploadIcon: "w-10 h-10 mb-3 text-gray-500",
  imageUploadText: "text-sm text-gray-400 text-center",
  imageUploadTextSemibold: "font-semibold",
  imageUploadSubText: "text-xs text-gray-500 mt-1",

  // Button
  submitButton: "px-10 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
  buttonText: "drop-shadow-md",

  // Icons
  iconSmall: "w-5 h-5 mr-2 text-orange-500",
  iconMedium: "w-6 h-6 mr-2 text-red-400",
  iconLarge: "w-8 h-8 mr-3 text-orange-400",
  iconInline: "w-5 h-5 ml-2 inline",
  iconUpload: "w-10 h-10 mb-3 text-gray-500",
};

// Success and error toast styles
export const toastStyles = {
  success: {
    container: "bg-gradient-to-r from-gray-800 to-gray-900 border-l-4 border-orange-500",
    body: "font-sans text-gray-100",
  },
  error: {
    container: "bg-gradient-to-r from-gray-800 to-gray-900",
    body: "font-sans text-gray-100",
  },
};


// Add to src/assets/dummyStyles.js
export const BookingPageStyles = {
  // Page background and layout
  pageContainer: "min-h-screen bg-gray-950 p-4 sm:p-6",
  fixedBackground: "fixed inset-0 overflow-hidden pointer-events-none",
  gradientBlob1: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob2: "absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob3: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 bg-gradient-to-r from-orange-500 to-orange-700 blur-xl opacity-10",

  // Header
  headerContainer: "relative mb-8 pt-16 text-center",
  headerDivider: "absolute inset-x-0 top-0 flex justify-center",
  headerDividerLine: "h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full",
  title: "text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide",
  titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400",
  subtitle: "text-gray-400 max-w-2xl mx-auto",

  // Search and Filter
  searchFilterContainer: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-800",
  searchFilterGrid: "grid grid-cols-1 md:grid-cols-3 gap-4",
  filterLabel: "block text-sm font-medium text-gray-400 mb-2",
  filterInput: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 pl-10 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
  filterIconContainer: "absolute left-3 top-3 text-orange-500",
  totalBookingsContainer: "bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-lg p-4 border border-orange-800/30 flex items-center justify-center",
  totalBookingsLabel: "text-gray-400 text-sm mb-1",
  totalBookingsValue: "text-2xl font-bold text-orange-400",

  // Booking Card
  bookingCard: "bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300",
  bookingCardHeader: "flex items-center mb-4 md:mb-0",
  bookingIconContainer: "bg-gradient-to-br from-orange-800/50 to-amber-800/50 p-3 rounded-xl mr-4",
  bookingIcon: "text-orange-400 text-xl",
  bookingCustomer: "text-lg font-bold text-white",
  bookingEmail: "text-sm text-gray-400",
  bookingExpandIcon: "flex items-center text-orange-400 ml-auto md:hidden",
  bookingInfoGrid: "grid grid-cols-2 sm:grid-cols-4 gap-4",
  bookingInfoLabel: "text-xs text-gray-400",
  bookingInfoValue: "text-sm font-medium text-white",
  bookingAmount: "text-sm font-semibold text-orange-400",
  bookingActions: "flex justify-between items-center mt-4",
  bookingActionButton: (color) => `bg-gradient-to-r from-${color}-700/50 to-${color}-800/50 text-${color}-300 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg`,
  bookingEditButton: "bg-gradient-to-r from-orange-700/50 to-amber-700/50 text-orange-300 hover:text-white text-sm px-3 py-1 rounded-lg flex items-center",
  bookingDetails: "border-t border-gray-800 p-5 bg-gradient-to-br from-gray-900/30 to-gray-900/10",
  bookingDetailsGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Panel
  panel: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800",
  panelTitle: "text-md font-bold text-white mb-4 flex items-center",
  panelIcon: "mr-2 text-orange-400",

  // Detail
  detailContainer: "flex items-start",
  detailIcon: "text-orange-400 mt-1 mr-3",
  detailLabel: "text-xs text-gray-400",
  detailValue: "text-sm font-medium text-white",

  // Spec
  specContainer: "flex flex-col items-center bg-gradient-to-br from-gray-900/30 to-gray-900/10 p-3 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all",
  specIcon: "text-xl mb-2 text-orange-400",
  specLabel: "text-xs text-gray-400",
  specValue: "font-semibold text-sm text-white",

  // Status
  statusIndicator: (status) => {
    const config = {
      completed: "bg-green-900/20 text-green-400",
      pending: "bg-amber-900/20 text-amber-400",
      active: "bg-orange-900/20 text-orange-400",
      cancelled: "bg-red-900/20 text-red-400",
      default: "bg-gray-900/30 text-gray-400"
    };
    return `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config[status] || config.default}`;
  },
  statusIcon: (status) => {
    const config = {
      completed: "bg-green-500",
      pending: "bg-amber-500",
      active: "bg-orange-500",
      cancelled: "bg-red-500",
      default: "bg-gray-500"
    };
    return `w-2 h-2 rounded-full mr-2 ${config[status] || config.default}`;
  },

  // No Bookings
  noBookingsContainer: "bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm text-center py-16 rounded-2xl border border-gray-800",
  noBookingsIconContainer: "mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-orange-900/30 to-amber-900/30 flex items-center justify-center mb-6",
  noBookingsIcon: "bg-gradient-to-br from-orange-600 to-orange-800 w-16 h-16 rounded-full flex items-center justify-center",
  noBookingsIconSvg: "h-8 w-8 text-orange-300",
  noBookingsTitle: "mt-4 text-xl font-medium text-white",
  noBookingsText: "mt-2 text-gray-400",
  noBookingsButton: "mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center mx-auto",

  // Car Image
  carImageContainer: "bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-xl w-20 h-12 flex items-center justify-center",
};

export const statusConfig = {
  completed: { bg: "bg-green-900/20", text: "text-green-400" },
  pending: { bg: "bg-amber-900/20", text: "text-amber-400" },
  active: { bg: "bg-orange-900/20", text: "text-orange-400" },
  cancelled: { bg: "bg-red-900/20", text: "text-red-400" },
  default: { bg: "bg-gray-900/30", text: "text-gray-400" }
};

// src/assets/dummyStyles.js (add these styles to the existing file)
export const navbarStyles = {
  nav: {
    base: "fixed w-full top-0 z-[100] transition-all duration-500",
    scrolled: "py-3 bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl",
    notScrolled: "py-6 bg-transparent"
  },
  floatingNav: {
    base: "w-full transition-all duration-500",
    scrolled: "px-4 md:px-8",
    notScrolled: "px-6 md:px-12"
  },
  logoContainer: "flex items-center gap-3 group",
  logoText: "font-['Pacifico'] font-bold text-xl md:text-2xl tracking-wider bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent",
  navLinksContainer: "hidden md:flex items-center justify-center flex-1",
  navLinksInner: "flex items-center bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md",
  navLink: {
    base: "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
    active: "bg-orange-500 text-white shadow-lg shadow-orange-500/30",
    inactive: "text-gray-400 hover:text-white hover:bg-white/5"
  },
  separator: "hidden",
  userActions: "hidden md:flex items-center gap-4",
  authButton: "flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm shadow-lg hover:shadow-orange-500/40 transition-all active:scale-95 cursor-pointer",
  authText: "hidden lg:block",
  mobileMenuButton: "p-2.5 rounded-xl bg-white/5 border border-white/10 text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer",
  mobileMenu: {
    container: "fixed inset-0 z-[90] md:hidden transition-all duration-500",
    open: "opacity-100 pointer-events-auto",
    closed: "opacity-0 pointer-events-none"
  },
  mobileMenuInner: "flex flex-col items-center justify-center h-full space-y-8 bg-black/95 backdrop-blur-3xl",
  mobileGrid: "flex flex-col gap-6 w-full px-12 items-center",
  mobileLink: {
    base: "text-3xl font-bold transition-all font-['Pacifico'] flex items-center gap-3",
    active: "text-orange-500 scale-110",
    inactive: "text-white/20 hover:text-white"
  },
  divider: "w-24 h-px bg-white/10",
  mobileAuthButton: "px-10 py-4 rounded-full bg-orange-600 text-white text-xl font-bold shadow-2xl cursor-pointer"
};