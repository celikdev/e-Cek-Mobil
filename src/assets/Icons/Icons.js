import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

const HomeIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
        stroke="#CCFF00"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const HomeFilledIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
        fill="#CCFF00"
      />
      <Path
        d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
        stroke="#CCFF00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const PayIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H8C8.26522 23 8.51957 22.8946 8.70711 22.7071C8.89464 22.5196 9 22.2652 9 22C9 21.7348 8.89464 21.4804 8.70711 21.2929C8.51957 21.1054 8.26522 21 8 21V21ZM22 15C21.7348 15 21.4804 15.1054 21.2929 15.2929C21.1054 15.4804 21 15.7348 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H16C15.7348 21 15.4804 21.1054 15.2929 21.2929C15.1054 21.4804 15 21.7348 15 22C15 22.2652 15.1054 22.5196 15.2929 22.7071C15.4804 22.8946 15.7348 23 16 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15ZM20 1H16C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V8C21 8.26522 21.1054 8.51957 21.2929 8.70711C21.4804 8.89464 21.7348 9 22 9C22.2652 9 22.5196 8.89464 22.7071 8.70711C22.8946 8.51957 23 8.26522 23 8V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1V1ZM2 9C2.26522 9 2.51957 8.89464 2.70711 8.70711C2.89464 8.51957 3 8.26522 3 8V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H8C8.26522 3 8.51957 2.89464 8.70711 2.70711C8.89464 2.51957 9 2.26522 9 2C9 1.73478 8.89464 1.48043 8.70711 1.29289C8.51957 1.10536 8.26522 1 8 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V8C1 8.26522 1.10536 8.51957 1.29289 8.70711C1.48043 8.89464 1.73478 9 2 9ZM10 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM9 9H7V7H9V9ZM14 11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H14C13.7348 5 13.4804 5.10536 13.2929 5.29289C13.1054 5.48043 13 5.73478 13 6V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 7H17V9H15V7ZM10 13H6C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H10C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 17H7V15H9V17ZM14 16C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16ZM18 13C17.7348 13 17.4804 13.1054 17.2929 13.2929C17.1054 13.4804 17 13.7348 17 14V17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V14C19 13.7348 18.8946 13.4804 18.7071 13.2929C18.5196 13.1054 18.2652 13 18 13ZM14 17C13.8022 17 13.6089 17.0586 13.4444 17.1685C13.28 17.2784 13.1518 17.4346 13.0761 17.6173C13.0004 17.8 12.9806 18.0011 13.0192 18.1951C13.0578 18.3891 13.153 18.5673 13.2929 18.7071C13.4327 18.847 13.6109 18.9422 13.8049 18.9808C13.9989 19.0194 14.2 18.9996 14.3827 18.9239C14.5654 18.8482 14.7216 18.72 14.8315 18.5556C14.9414 18.3911 15 18.1978 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17Z"
        fill="#CCFF00"
      />
    </Svg>
  );
};

const PayFilledIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H8C8.26522 23 8.51957 22.8946 8.70711 22.7071C8.89464 22.5196 9 22.2652 9 22C9 21.7348 8.89464 21.4804 8.70711 21.2929C8.51957 21.1054 8.26522 21 8 21V21ZM22 15C21.7348 15 21.4804 15.1054 21.2929 15.2929C21.1054 15.4804 21 15.7348 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H16C15.7348 21 15.4804 21.1054 15.2929 21.2929C15.1054 21.4804 15 21.7348 15 22C15 22.2652 15.1054 22.5196 15.2929 22.7071C15.4804 22.8946 15.7348 23 16 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15ZM20 1H16C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V8C21 8.26522 21.1054 8.51957 21.2929 8.70711C21.4804 8.89464 21.7348 9 22 9C22.2652 9 22.5196 8.89464 22.7071 8.70711C22.8946 8.51957 23 8.26522 23 8V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1V1ZM2 9C2.26522 9 2.51957 8.89464 2.70711 8.70711C2.89464 8.51957 3 8.26522 3 8V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H8C8.26522 3 8.51957 2.89464 8.70711 2.70711C8.89464 2.51957 9 2.26522 9 2C9 1.73478 8.89464 1.48043 8.70711 1.29289C8.51957 1.10536 8.26522 1 8 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V8C1 8.26522 1.10536 8.51957 1.29289 8.70711C1.48043 8.89464 1.73478 9 2 9ZM10 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM9 9H7V7H9V9ZM14 11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H14C13.7348 5 13.4804 5.10536 13.2929 5.29289C13.1054 5.48043 13 5.73478 13 6V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 7H17V9H15V7ZM10 13H6C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H10C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 17H7V15H9V17ZM14 16C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16ZM18 13C17.7348 13 17.4804 13.1054 17.2929 13.2929C17.1054 13.4804 17 13.7348 17 14V17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V14C19 13.7348 18.8946 13.4804 18.7071 13.2929C18.5196 13.1054 18.2652 13 18 13ZM14 17C13.8022 17 13.6089 17.0586 13.4444 17.1685C13.28 17.2784 13.1518 17.4346 13.0761 17.6173C13.0004 17.8 12.9806 18.0011 13.0192 18.1951C13.0578 18.3891 13.153 18.5673 13.2929 18.7071C13.4327 18.847 13.6109 18.9422 13.8049 18.9808C13.9989 19.0194 14.2 18.9996 14.3827 18.9239C14.5654 18.8482 14.7216 18.72 14.8315 18.5556C14.9414 18.3911 15 18.1978 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17Z"
        fill="#CCFF00"
      />
      <Rect x="15" y="7" width="2" height="2" fill="#CCFF00" />
      <Rect x="7" y="7" width="2" height="2" fill="#CCFF00" />
      <Rect x="7" y="15" width="2" height="2" fill="#CCFF00" />
    </Svg>
  );
};

const GiftIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_71_133)">
        <Path
          d="M22.6922 21.525C21.7078 20.9039 20.7258 20.2804 19.7414 19.6594C19.6031 19.5726 19.4648 19.4836 19.3266 19.3969C18.9844 19.1812 18.4852 19.1812 18.143 19.3969C17.1586 20.0179 16.1766 20.6414 15.1922 21.2625C15.0539 21.3492 14.9156 21.4383 14.7773 21.525C15.1711 21.525 15.5648 21.525 15.9609 21.525C14.9766 20.9039 13.9945 20.2804 13.0102 19.6594C12.8719 19.5726 12.7336 19.4836 12.5953 19.3969C12.2531 19.1812 11.7539 19.1812 11.4117 19.3969C10.4273 20.0179 9.44531 20.6414 8.46094 21.2625C8.32266 21.3492 8.18438 21.4383 8.04609 21.525C8.43984 21.525 8.83359 21.525 9.22969 21.525C8.24531 20.9039 7.26328 20.2804 6.27891 19.6594C6.14063 19.5726 6.00234 19.4836 5.86406 19.3969C5.52188 19.1812 5.02266 19.1812 4.68047 19.3969C3.69609 20.0179 2.71406 20.6414 1.72969 21.2625C1.59141 21.3492 1.45313 21.4383 1.31484 21.525C1.90313 21.8625 2.49141 22.2 3.07734 22.5375C3.07734 22.3617 3.07734 22.1883 3.07734 22.0125C3.07734 21.5344 3.07734 21.0562 3.07734 20.5804C3.07734 19.8773 3.07734 19.1742 3.07734 18.4711C3.07734 17.6133 3.07734 16.7578 3.07734 15.9C3.07734 14.9625 3.07734 14.025 3.07734 13.0898C3.07734 12.1429 3.07734 11.1937 3.07734 10.2469C3.07734 9.37029 3.07734 8.49373 3.07734 7.61482C3.07734 6.87888 3.07734 6.1406 3.07734 5.40466C3.07734 4.88201 3.07734 4.35701 3.07734 3.83435C3.07734 3.59763 3.07734 3.36091 3.07734 3.12419C3.07734 3.04216 3.08203 2.96013 3.09375 2.8781C3.07969 2.98123 3.06563 3.08669 3.05156 3.18982C3.07266 3.04451 3.1125 2.90388 3.16875 2.77029C3.12891 2.86404 3.08906 2.95779 3.05156 3.04919C3.11016 2.91794 3.18281 2.79607 3.26953 2.68123C3.20859 2.76091 3.14766 2.83826 3.08672 2.91794C3.16875 2.81482 3.2625 2.72107 3.36563 2.63904C3.28594 2.69998 3.20859 2.76091 3.12891 2.82185C3.24375 2.73513 3.36328 2.66248 3.49688 2.60388C3.40313 2.64373 3.30938 2.68357 3.21797 2.72107C3.35391 2.66482 3.49219 2.62498 3.6375 2.60388C3.53438 2.61794 3.42891 2.63201 3.32578 2.64607C3.53438 2.62029 3.74766 2.62966 3.95625 2.62966C4.35938 2.62966 4.76484 2.62966 5.16797 2.62966C5.775 2.62966 6.38438 2.62966 6.99141 2.62966C7.74141 2.62966 8.49375 2.62966 9.24375 2.62966C10.0641 2.62966 10.8844 2.62966 11.7047 2.62966C12.5344 2.62966 13.3617 2.62966 14.1914 2.62966C14.9625 2.62966 15.7336 2.62966 16.5047 2.62966C17.1539 2.62966 17.8008 2.62966 18.45 2.62966C18.9117 2.62966 19.3711 2.62966 19.8328 2.62966C20.0414 2.62966 20.2477 2.62966 20.4563 2.62966C20.5359 2.62966 20.618 2.63435 20.6977 2.64607C20.5945 2.63201 20.4891 2.61794 20.3859 2.60388C20.5313 2.62498 20.6719 2.66482 20.8055 2.72107C20.7117 2.68123 20.618 2.64138 20.5266 2.60388C20.6578 2.66248 20.7797 2.73513 20.8945 2.82185C20.8148 2.76091 20.7375 2.69998 20.6578 2.63904C20.7609 2.72107 20.8547 2.81482 20.9367 2.91794C20.8758 2.83826 20.8148 2.76091 20.7539 2.68123C20.8406 2.79607 20.9133 2.9156 20.9719 3.04919C20.932 2.95544 20.8922 2.86169 20.8547 2.77029C20.9109 2.90623 20.9508 3.04451 20.9719 3.18982C20.9578 3.08669 20.9438 2.98123 20.9297 2.8781C20.9578 3.10544 20.9461 3.34216 20.9461 3.57185C20.9461 4.03357 20.9461 4.49763 20.9461 4.95935C20.9461 5.65076 20.9461 6.34451 20.9461 7.03591C20.9461 7.8867 20.9461 8.73513 20.9461 9.58591C20.9461 10.5211 20.9461 11.4539 20.9461 12.389C20.9461 13.3383 20.9461 14.2875 20.9461 15.2367C20.9461 16.1203 20.9461 17.0015 20.9461 17.8851C20.9461 18.6328 20.9461 19.3781 20.9461 20.1258C20.9461 20.6625 20.9461 21.2015 20.9461 21.7383C20.9461 21.9937 20.9438 22.2492 20.9461 22.5047C20.9461 22.5164 20.9461 22.5258 20.9461 22.5375C20.9461 22.8375 21.0773 23.1539 21.2883 23.3672C21.4922 23.5711 21.825 23.7234 22.118 23.7094C22.4203 23.6953 22.7344 23.5969 22.9477 23.3672C23.1586 23.1375 23.2898 22.8562 23.2898 22.5375C23.2898 22.1578 23.2898 21.7781 23.2898 21.3984C23.2898 20.4258 23.2898 19.4531 23.2898 18.4804C23.2898 17.1609 23.2898 15.8414 23.2898 14.5242C23.2898 13.1015 23.2898 11.6812 23.2898 10.2586C23.2898 8.9906 23.2898 7.72263 23.2898 6.45466C23.2898 5.58279 23.2898 4.71091 23.2898 3.84138C23.2898 3.63279 23.2898 3.42185 23.2898 3.21326C23.2898 3.1781 23.2898 3.14294 23.2898 3.11013C23.2852 2.47498 23.0742 1.88435 22.6875 1.38513C22.1391 0.674976 21.3023 0.295288 20.4094 0.295288C20.2031 0.295288 19.9969 0.295288 19.7883 0.295288C18.8672 0.295288 17.9461 0.295288 17.025 0.295288C15.6984 0.295288 14.3719 0.295288 13.0453 0.295288C11.6367 0.295288 10.2281 0.295288 8.81953 0.295288C7.66406 0.295288 6.50859 0.295288 5.35078 0.295288C4.76953 0.295288 4.19063 0.295288 3.60938 0.295288C3.40078 0.295288 3.19219 0.323413 2.98594 0.356226C2.22656 0.475757 1.60313 0.970288 1.18125 1.57263C0.846094 2.0531 0.726562 2.64841 0.726562 3.22732C0.726562 3.82263 0.726562 4.4156 0.726562 5.01091C0.726562 6.11951 0.726562 7.23044 0.726562 8.33904C0.726562 9.71716 0.726562 11.0929 0.726562 12.4711C0.726562 13.8679 0.726562 15.2672 0.726562 16.664C0.726562 17.8336 0.726562 19.0054 0.726562 20.175C0.726562 20.8711 0.726562 21.5672 0.726562 22.2609C0.726562 22.3547 0.726562 22.4461 0.726562 22.5398C0.726562 22.9523 0.951563 23.3437 1.30781 23.5523C1.65938 23.7586 2.13984 23.775 2.49141 23.5523C3.47578 22.9312 4.45781 22.3078 5.44219 21.6867C5.58047 21.6 5.71875 21.5109 5.85703 21.4242C5.46328 21.4242 5.06953 21.4242 4.67344 21.4242C5.65781 22.0453 6.63984 22.6687 7.62422 23.2898C7.7625 23.3765 7.90078 23.4656 8.03906 23.5523C8.38125 23.7679 8.88047 23.7679 9.22266 23.5523C10.207 22.9312 11.1891 22.3078 12.1734 21.6867C12.3117 21.6 12.45 21.5109 12.5883 21.4242C12.1945 21.4242 11.8008 21.4242 11.4047 21.4242C12.3891 22.0453 13.3711 22.6687 14.3555 23.2898C14.4938 23.3765 14.632 23.4656 14.7703 23.5523C15.1125 23.7679 15.6117 23.7679 15.9539 23.5523C16.9383 22.9312 17.9203 22.3078 18.9047 21.6867C19.043 21.6 19.1813 21.5109 19.3195 21.4242C18.9258 21.4242 18.532 21.4242 18.1359 21.4242C19.1203 22.0453 20.1023 22.6687 21.0867 23.2898C21.225 23.3765 21.3633 23.4656 21.5016 23.5523C21.7523 23.7117 22.1203 23.7492 22.4039 23.6695C22.6758 23.5945 22.9711 23.3836 23.1047 23.1304C23.4188 22.5515 23.2477 21.8765 22.6922 21.525Z"
          fill="#CCFF00"
        />
        <G clip-path="url(#clip1_71_133)">
          <Path
            d="M16.052 8.03603H14.336V7.46403C14.336 6.85721 14.095 6.27525 13.6659 5.84617C13.2368 5.41708 12.6549 5.17603 12.048 5.17603C11.4412 5.17603 10.8593 5.41708 10.4302 5.84617C10.0011 6.27525 9.76005 6.85721 9.76005 7.46403V8.03603H8.04405C7.89234 8.03603 7.74685 8.09629 7.63958 8.20356C7.53231 8.31083 7.47205 8.45632 7.47205 8.60803V14.9C7.47205 15.3551 7.65284 15.7916 7.97465 16.1134C8.29646 16.4352 8.73293 16.616 9.18805 16.616H14.908C15.3632 16.616 15.7996 16.4352 16.1214 16.1134C16.4433 15.7916 16.624 15.3551 16.624 14.9V8.60803C16.624 8.45632 16.5638 8.31083 16.4565 8.20356C16.3492 8.09629 16.2038 8.03603 16.052 8.03603ZM10.904 7.46403C10.904 7.16062 11.0246 6.86964 11.2391 6.6551C11.4537 6.44055 11.7446 6.32003 12.048 6.32003C12.3515 6.32003 12.6424 6.44055 12.857 6.6551C13.0715 6.86964 13.192 7.16062 13.192 7.46403V8.03603H10.904V7.46403ZM15.48 14.9C15.48 15.0517 15.4198 15.1972 15.3125 15.3045C15.2052 15.4118 15.0598 15.472 14.908 15.472H9.18805C9.03634 15.472 8.89085 15.4118 8.78358 15.3045C8.67631 15.1972 8.61605 15.0517 8.61605 14.9V9.18003H9.76005V9.75203C9.76005 9.90373 9.82031 10.0492 9.92758 10.1565C10.0349 10.2638 10.1803 10.324 10.332 10.324C10.4837 10.324 10.6292 10.2638 10.7365 10.1565C10.8438 10.0492 10.904 9.90373 10.904 9.75203V9.18003H13.192V9.75203C13.192 9.90373 13.2523 10.0492 13.3596 10.1565C13.4669 10.2638 13.6123 10.324 13.764 10.324C13.9158 10.324 14.0612 10.2638 14.1685 10.1565C14.2758 10.0492 14.336 9.90373 14.336 9.75203V9.18003H15.48V14.9Z"
            fill="#CCFF00"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_71_133">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
        <ClipPath id="clip1_71_133">
          <Rect
            width="9.12"
            height="11.424"
            fill="white"
            transform="translate(7.48804 5.18402)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const GiftFilledIcon = ({width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_71_144)">
        <Path
          d="M22.6922 21.525C21.7078 20.9039 20.7258 20.2804 19.7414 19.6594C19.6031 19.5726 19.4648 19.4836 19.3266 19.3969C18.9844 19.1812 18.4852 19.1812 18.143 19.3969C17.1586 20.0179 16.1766 20.6414 15.1922 21.2625C15.0539 21.3492 14.9156 21.4383 14.7773 21.525C15.1711 21.525 15.5648 21.525 15.9609 21.525C14.9766 20.9039 13.9945 20.2804 13.0102 19.6594C12.8719 19.5726 12.7336 19.4836 12.5953 19.3969C12.2531 19.1812 11.7539 19.1812 11.4117 19.3969C10.4273 20.0179 9.44531 20.6414 8.46094 21.2625C8.32266 21.3492 8.18438 21.4383 8.04609 21.525C8.43984 21.525 8.83359 21.525 9.22969 21.525C8.24531 20.9039 7.26328 20.2804 6.27891 19.6594C6.14063 19.5726 6.00234 19.4836 5.86406 19.3969C5.52188 19.1812 5.02266 19.1812 4.68047 19.3969C3.69609 20.0179 2.71406 20.6414 1.72969 21.2625C1.59141 21.3492 1.45313 21.4383 1.31484 21.525C1.90313 21.8625 2.49141 22.2 3.07734 22.5375C3.07734 22.3617 3.07734 22.1883 3.07734 22.0125C3.07734 21.5344 3.07734 21.0562 3.07734 20.5804C3.07734 19.8773 3.07734 19.1742 3.07734 18.4711C3.07734 17.6133 3.07734 16.7578 3.07734 15.9C3.07734 14.9625 3.07734 14.025 3.07734 13.0898C3.07734 12.1429 3.07734 11.1937 3.07734 10.2469C3.07734 9.37029 3.07734 8.49373 3.07734 7.61482C3.07734 6.87888 3.07734 6.1406 3.07734 5.40466C3.07734 4.88201 3.07734 4.35701 3.07734 3.83435C3.07734 3.59763 3.07734 3.36091 3.07734 3.12419C3.07734 3.04216 3.08203 2.96013 3.09375 2.8781C3.07969 2.98123 3.06563 3.08669 3.05156 3.18982C3.07266 3.04451 3.1125 2.90388 3.16875 2.77029C3.12891 2.86404 3.08906 2.95779 3.05156 3.04919C3.11016 2.91794 3.18281 2.79607 3.26953 2.68123C3.20859 2.76091 3.14766 2.83826 3.08672 2.91794C3.16875 2.81482 3.2625 2.72107 3.36563 2.63904C3.28594 2.69998 3.20859 2.76091 3.12891 2.82185C3.24375 2.73513 3.36328 2.66248 3.49688 2.60388C3.40313 2.64373 3.30938 2.68357 3.21797 2.72107C3.35391 2.66482 3.49219 2.62498 3.6375 2.60388C3.53438 2.61794 3.42891 2.63201 3.32578 2.64607C3.53438 2.62029 3.74766 2.62966 3.95625 2.62966C4.35938 2.62966 4.76484 2.62966 5.16797 2.62966C5.775 2.62966 6.38438 2.62966 6.99141 2.62966C7.74141 2.62966 8.49375 2.62966 9.24375 2.62966C10.0641 2.62966 10.8844 2.62966 11.7047 2.62966C12.5344 2.62966 13.3617 2.62966 14.1914 2.62966C14.9625 2.62966 15.7336 2.62966 16.5047 2.62966C17.1539 2.62966 17.8008 2.62966 18.45 2.62966C18.9117 2.62966 19.3711 2.62966 19.8328 2.62966C20.0414 2.62966 20.2477 2.62966 20.4563 2.62966C20.5359 2.62966 20.618 2.63435 20.6977 2.64607C20.5945 2.63201 20.4891 2.61794 20.3859 2.60388C20.5313 2.62498 20.6719 2.66482 20.8055 2.72107C20.7117 2.68123 20.618 2.64138 20.5266 2.60388C20.6578 2.66248 20.7797 2.73513 20.8945 2.82185C20.8148 2.76091 20.7375 2.69998 20.6578 2.63904C20.7609 2.72107 20.8547 2.81482 20.9367 2.91794C20.8758 2.83826 20.8148 2.76091 20.7539 2.68123C20.8406 2.79607 20.9133 2.9156 20.9719 3.04919C20.932 2.95544 20.8922 2.86169 20.8547 2.77029C20.9109 2.90623 20.9508 3.04451 20.9719 3.18982C20.9578 3.08669 20.9438 2.98123 20.9297 2.8781C20.9578 3.10544 20.9461 3.34216 20.9461 3.57185C20.9461 4.03357 20.9461 4.49763 20.9461 4.95935C20.9461 5.65076 20.9461 6.34451 20.9461 7.03591C20.9461 7.8867 20.9461 8.73513 20.9461 9.58591C20.9461 10.5211 20.9461 11.4539 20.9461 12.389C20.9461 13.3383 20.9461 14.2875 20.9461 15.2367C20.9461 16.1203 20.9461 17.0015 20.9461 17.8851C20.9461 18.6328 20.9461 19.3781 20.9461 20.1258C20.9461 20.6625 20.9461 21.2015 20.9461 21.7383C20.9461 21.9937 20.9438 22.2492 20.9461 22.5047C20.9461 22.5164 20.9461 22.5258 20.9461 22.5375C20.9461 22.8375 21.0773 23.1539 21.2883 23.3672C21.4922 23.5711 21.825 23.7234 22.118 23.7094C22.4203 23.6953 22.7344 23.5969 22.9477 23.3672C23.1586 23.1375 23.2898 22.8562 23.2898 22.5375C23.2898 22.1578 23.2898 21.7781 23.2898 21.3984C23.2898 20.4258 23.2898 19.4531 23.2898 18.4804C23.2898 17.1609 23.2898 15.8414 23.2898 14.5242C23.2898 13.1015 23.2898 11.6812 23.2898 10.2586C23.2898 8.9906 23.2898 7.72263 23.2898 6.45466C23.2898 5.58279 23.2898 4.71091 23.2898 3.84138C23.2898 3.63279 23.2898 3.42185 23.2898 3.21326C23.2898 3.1781 23.2898 3.14294 23.2898 3.11013C23.2852 2.47498 23.0742 1.88435 22.6875 1.38513C22.1391 0.674976 21.3023 0.295288 20.4094 0.295288C20.2031 0.295288 19.9969 0.295288 19.7883 0.295288C18.8672 0.295288 17.9461 0.295288 17.025 0.295288C15.6984 0.295288 14.3719 0.295288 13.0453 0.295288C11.6367 0.295288 10.2281 0.295288 8.81953 0.295288C7.66406 0.295288 6.50859 0.295288 5.35078 0.295288C4.76953 0.295288 4.19063 0.295288 3.60938 0.295288C3.40078 0.295288 3.19219 0.323413 2.98594 0.356226C2.22656 0.475757 1.60313 0.970288 1.18125 1.57263C0.846094 2.0531 0.726562 2.64841 0.726562 3.22732C0.726562 3.82263 0.726562 4.4156 0.726562 5.01091C0.726562 6.11951 0.726562 7.23044 0.726562 8.33904C0.726562 9.71716 0.726562 11.0929 0.726562 12.4711C0.726562 13.8679 0.726562 15.2672 0.726562 16.664C0.726562 17.8336 0.726562 19.0054 0.726562 20.175C0.726562 20.8711 0.726562 21.5672 0.726562 22.2609C0.726562 22.3547 0.726562 22.4461 0.726562 22.5398C0.726562 22.9523 0.951563 23.3437 1.30781 23.5523C1.65938 23.7586 2.13984 23.775 2.49141 23.5523C3.47578 22.9312 4.45781 22.3078 5.44219 21.6867C5.58047 21.6 5.71875 21.5109 5.85703 21.4242C5.46328 21.4242 5.06953 21.4242 4.67344 21.4242C5.65781 22.0453 6.63984 22.6687 7.62422 23.2898C7.7625 23.3765 7.90078 23.4656 8.03906 23.5523C8.38125 23.7679 8.88047 23.7679 9.22266 23.5523C10.207 22.9312 11.1891 22.3078 12.1734 21.6867C12.3117 21.6 12.45 21.5109 12.5883 21.4242C12.1945 21.4242 11.8008 21.4242 11.4047 21.4242C12.3891 22.0453 13.3711 22.6687 14.3555 23.2898C14.4938 23.3765 14.632 23.4656 14.7703 23.5523C15.1125 23.7679 15.6117 23.7679 15.9539 23.5523C16.9383 22.9312 17.9203 22.3078 18.9047 21.6867C19.043 21.6 19.1813 21.5109 19.3195 21.4242C18.9258 21.4242 18.532 21.4242 18.1359 21.4242C19.1203 22.0453 20.1023 22.6687 21.0867 23.2898C21.225 23.3765 21.3633 23.4656 21.5016 23.5523C21.7523 23.7117 22.1203 23.7492 22.4039 23.6695C22.6758 23.5945 22.9711 23.3836 23.1047 23.1304C23.4188 22.5515 23.2477 21.8765 22.6922 21.525Z"
          fill="#CCFF00"
        />
        <G clip-path="url(#clip1_71_144)">
          <Path
            d="M16.052 8.03603H14.336V7.46403C14.336 6.85721 14.095 6.27525 13.6659 5.84617C13.2368 5.41708 12.6549 5.17603 12.048 5.17603C11.4412 5.17603 10.8593 5.41708 10.4302 5.84617C10.0011 6.27525 9.76005 6.85721 9.76005 7.46403V8.03603H8.04405C7.89234 8.03603 7.74685 8.09629 7.63958 8.20356C7.53231 8.31083 7.47205 8.45632 7.47205 8.60803V14.9C7.47205 15.3551 7.65284 15.7916 7.97465 16.1134C8.29646 16.4352 8.73293 16.616 9.18805 16.616H14.908C15.3632 16.616 15.7996 16.4352 16.1214 16.1134C16.4433 15.7916 16.624 15.3551 16.624 14.9V8.60803C16.624 8.45632 16.5638 8.31083 16.4565 8.20356C16.3492 8.09629 16.2038 8.03603 16.052 8.03603ZM10.904 7.46403C10.904 7.16062 11.0246 6.86964 11.2391 6.6551C11.4537 6.44055 11.7446 6.32003 12.048 6.32003C12.3515 6.32003 12.6424 6.44055 12.857 6.6551C13.0715 6.86964 13.192 7.16062 13.192 7.46403V8.03603H10.904V7.46403ZM15.48 14.9C15.48 15.0517 15.4198 15.1972 15.3125 15.3045C15.2052 15.4118 15.0598 15.472 14.908 15.472H9.18805C9.03634 15.472 8.89085 15.4118 8.78358 15.3045C8.67631 15.1972 8.61605 15.0517 8.61605 14.9V9.18003H9.76005V9.75203C9.76005 9.90373 9.82031 10.0492 9.92758 10.1565C10.0349 10.2638 10.1803 10.324 10.332 10.324C10.4837 10.324 10.6292 10.2638 10.7365 10.1565C10.8438 10.0492 10.904 9.90373 10.904 9.75203V9.18003H13.192V9.75203C13.192 9.90373 13.2523 10.0492 13.3596 10.1565C13.4669 10.2638 13.6123 10.324 13.764 10.324C13.9158 10.324 14.0612 10.2638 14.1685 10.1565C14.2758 10.0492 14.336 9.90373 14.336 9.75203V9.18003H15.48V14.9Z"
            fill="#CCFF00"
          />
          <Rect x="8" y="9" width="8" height="7" fill="#CCFF00" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_71_144">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
        <ClipPath id="clip1_71_144">
          <Rect
            width="9.12"
            height="11.424"
            fill="white"
            transform="translate(7.48804 5.18402)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export {
  HomeIcon,
  HomeFilledIcon,
  PayIcon,
  PayFilledIcon,
  GiftIcon,
  GiftFilledIcon,
};