export function hexToRGBA(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

export const showTabBar = (props) => {
  props.navigation.dangerouslyGetParent().setParams({
    tabBarVisible: true,
  });
};

export const hideTabBar = (props) => {
  props.navigation.dangerouslyGetParent().setParams({
    tabBarVisible: false,
  });
};

export const getFullCoursesCountString = (count) => {
  const newCount = +count > 20 ? +count % 10 : +count;
  switch (+newCount) {
    case 1:
      return `${count} курс`;
      break;
    case 2:
    case 3:
    case 4:
      return `${count} курса`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return `${count} курсов`;
  
    default:
      return `${count} курсов`;
      break;
  }
};