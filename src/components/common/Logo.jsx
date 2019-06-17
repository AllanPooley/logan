import React from 'react';
import { Link } from 'gatsby';
import './Logo.scss';

const Logo = (props) => {
  const {
    colour,
    size,
    clickable,
  } = props;
  const logoClasses = `logo${colour ? ` ${colour}` : ''}${size ? ` ${size}` : ''}`;
  return (
    clickable ? (
      <Link className={logoClasses} to="/" aria-label="Return Home">
        <svg viewBox="0 0 164 119" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd">
            <path d="M4.33 9.512c0-4.032-.446-4.864-2.484-5.12C.382 4.2 0 3.752 0 2.664S.764 1 2.228 1h14.834c1.592 0 2.292.576 2.292 1.728 0 1.152-.255 1.408-1.91 1.664-1.783.256-2.037 1.088-2.037 5.12V37.8c0 3.904.636 4.48 4.329 4.48h4.075c3.82 0 6.302-.384 8.53-1.536 1.656-.832 2.866-1.792 5.412-4.288.637-.64 1.21-.896 1.592-.896.382 0 .764.128 1.018.384.446.32.637.768.637 1.152 0 .32-.191.704-.446 1.216l-5.793 9.408c-.7 1.152-.955 1.28-1.783 1.28-.7 0-1.082-.192-2.1-1.152-.828-.768-1.147-.832-2.547-.832H2.228C.7 47.016 0 46.44 0 45.288c0-1.024.382-1.472 1.846-1.664 2.038-.256 2.483-1.152 2.483-4.8V9.512zm51.162 7.566v22.568c0 3.107.515 3.867 2.898 4.438 1.224.253 1.61.697 1.61 1.521S59.356 47 58.261 47H42.803C41.708 47 41 46.43 41 45.542c0-.824.45-1.141 1.61-1.458 1.224-.317 1.997-.76 2.383-1.522.193-.507.322-1.204.322-2.916V26.777c0-1.902-.58-2.79-1.932-3.233-.386-.063-.58-.127-.644-.19-.644-.19-.966-.761-.966-1.395a1.3 1.3 0 0 1 .837-1.204l11.4-4.565c.129-.127.387-.19.58-.19.58 0 .773.317.902 1.078zM43.193 8.375C44.158 5.562 48.406 3 52.074 3 54.455 3 56 4 56 5.688c0 1.125-.837 2.562-2.124 3.625C52.01 10.937 49.178 12 46.99 12 44.545 12 43 11 43 9.375c0-.313.064-.688.193-1zm31.923-1.892v9.992h8.14c.387 0 .581.065.581.323 0 .129 0 .322-.129.515l-.904 2.386c-.194.515-.711.773-1.163.773h-5.685c-.517 0-.775.194-.775.903v18.76c0 2.514.904 3.546 3.036 3.546 1.292 0 2.584-.387 3.553-1.16.969-.774 1.486-1.097 1.873-1.097.776 0 1.357.58 1.357 1.354 0 .516-.323 1.032-.904 1.676C81.77 46.84 78.152 48 73.307 48c-5.361 0-8.914-1.87-8.914-4.706 0-.387 0-1.032.129-1.676.258-1.74.517-3.933.517-6.254v-13.99c0-.58-.388-.902-.84-.902h-2.842c-.905 0-1.357-.515-1.357-1.418 0-.903.452-1.547 2.003-2.514 3.294-2.063 7.752-6.576 10.077-10.122C72.661 5.322 73.178 5 73.89 5c.775 0 1.227.645 1.227 1.483zm25 0v9.992h8.14c.387 0 .581.065.581.323 0 .129 0 .322-.129.515l-.904 2.386c-.194.515-.711.773-1.163.773h-5.685c-.517 0-.775.194-.775.903v18.76c0 2.514.904 3.546 3.036 3.546 1.292 0 2.584-.387 3.553-1.16.969-.774 1.486-1.097 1.873-1.097.776 0 1.357.58 1.357 1.354 0 .516-.323 1.032-.904 1.676C106.77 46.84 103.152 48 98.307 48c-5.361 0-8.914-1.87-8.914-4.706 0-.387 0-1.032.129-1.676.258-1.74.517-3.933.517-6.254v-13.99c0-.58-.388-.902-.84-.902h-2.842c-.905 0-1.357-.515-1.357-1.418 0-.903.452-1.547 2.003-2.514 3.294-2.063 7.752-6.576 10.077-10.122C97.661 5.322 98.178 5 98.89 5c.775 0 1.227.645 1.227 1.483zM126.043.962v38.6c0 1.924 0 2.373.255 2.95.255.705 1.085 1.218 2.17 1.538 1.277.321 1.532.642 1.532 1.54 0 .833-.574 1.41-1.723 1.41h-14.554c-1.085 0-1.723-.577-1.723-1.475 0-.897.32-1.154 1.532-1.475 1.085-.32 1.787-.833 2.17-1.538.192-.577.255-1.219.255-3.014V11.093c0-2.18-.51-3.078-1.914-3.463-.383-.128-.575-.192-.639-.192-.574-.257-.957-.77-.957-1.41 0-.578.319-1.027.83-1.219L124.574.064c.192-.064.447-.064.575-.064.574 0 .766.192.894.962zm36.407 27.472l-19.18 6.248c-.581.127-.775.316-.775.568 0 .38.258 1.01.581 1.768 2.131 3.976 5.554 6.122 9.558 6.122 3.1 0 5.877-1.136 8.654-3.724.645-.568 1.098-.757 1.42-.757.775 0 1.292.568 1.292 1.325 0 .316-.258.947-.517 1.326-2.97 4.228-8.46 6.69-14.788 6.69C138.297 48 131 41.499 131 32.22c0-9.088 7.168-16.22 16.532-16.22 5.231 0 9.752 2.146 12.658 5.996a23.095 23.095 0 0 1 2.196 3.66c.452 1.01.645 1.579.645 2.02 0 .316-.193.632-.58.758zM140.102 31c.122 0 .306-.066.49-.133l9.673-3.447c.49-.199.735-.398.735-.73 0-.265-.245-1.193-.612-2.254-.368-1.06-.98-2.121-1.715-3.05-1.163-1.458-2.816-2.386-4.469-2.386-3.122 0-5.204 2.983-5.204 7.425 0 2.453.551 4.575 1.102 4.575zM24.951 71.338l2.379 3.033 2.378 2.863c.39.427.562.598.692.598.303 0 1.297-1.24 2.205-2.735 2.033-3.29 3.114-6.664 3.114-9.527 0-1.025-.087-1.623-.476-2.05l-.216-.257a.814.814 0 0 1-.173-.513c0-.427.908-1.281 1.773-1.794l1.124-.64c.303-.172.563-.257.735-.257.779 0 1.125.94 1.125 2.99 0 1.068-.216 2.692-.476 4.06-.346 1.623-.692 3.203-1.254 4.656-1.038 2.777-1.946 4.272-4.67 7.69-.13.128-.216.342-.39.47-.086.128-.13.214-.13.3 0 .17.217.512.606.854l2.854 2.734c.346.3.692.598 1.125.897.778.556 1.038.641 1.816.855.649.17.908.384.908.854 0 .598-.476.983-1.297.983h-8.476c-.562 0-.692-.043-1.081-.47l-1.34-1.367-.347-.342a.62.62 0 0 0-.259-.085c-.26 0-.39.042-.908.427C23.784 87.274 21.405 88 18.249 88 12.065 88 8 84.668 8 79.626c0-3.546 1.99-6.11 6.184-8.075.908-.427 1.038-.512 1.038-.683 0-.128-.13-.427-.433-.897-1.557-2.478-2.032-3.888-2.032-5.81 0-4.615 4.454-8.161 10.421-8.161 4.844 0 7.957 2.563 7.957 6.58 0 3.118-2.162 5.938-5.924 7.604-.606.257-.735.342-.735.513 0 .043.043.128.13.214l.345.427zM15 79.298c0 .206.044.454.044.702.443 2.851 2.876 5 5.797 5 1.194 0 2.345-.33 3.894-1.322.177-.124.265-.248.265-.372 0-.166-.177-.455-.62-.744-.176-.248-1.238-1.364-3.053-3.43a66.701 66.701 0 0 1-2.831-3.47c-.31-.497-.531-.662-.708-.662-.266 0-.531.165-.93.537C15.575 76.694 15 77.81 15 79.297zm5-16.636v.353c.173 1.544.993 3.573 2.029 4.764.13.133.259.221.388.221.216 0 1.123-.574 1.77-1.191.993-.883 1.813-2.735 1.813-4.191C26 60.544 24.748 59 23.065 59 21.295 59 20 60.5 20 62.662zM80.882 76.445C91.054 78.531 97 84.373 97 92.092 97 100.437 89.836 106 79.09 106H50.58c-1.72 0-2.579-.626-2.579-1.878 0-1.182.43-1.53 2.15-1.808 1.289-.208 1.79-.626 2.22-1.738.215-.835.286-1.043.286-3.894V65.249c0-4.173-.43-5.285-2.364-5.563-1.862-.278-2.149-.557-2.149-1.878 0-1.182.788-1.808 2.58-1.808h19.413c11.963 0 19.7 4.66 19.7 11.961 0 2.017-.716 3.964-2.077 5.285-1.433 1.53-2.937 2.156-6.877 3.2zM68.708 60C65.876 60 65 60.748 65 63.126v8.36c0 1.97.742 2.514 3.708 2.514C74.303 74 77 71.961 77 67.612 77 62.99 73.831 60 68.708 60zm.757 19C66.047 79 65 79.635 65 82.034V98.12c0 3.033 1.256 3.88 5.581 3.88C78.674 102 83 98.331 83 91.347 83 83.515 77.977 79 69.465 79zm43.552-5.853v24.025c0 3.307.57 4.116 3.203 4.724 1.353.27 1.78.742 1.78 1.62 0 .877-.712 1.484-1.922 1.484H98.993c-1.21 0-1.993-.607-1.993-1.552 0-.877.498-1.215 1.78-1.552 1.352-.338 2.206-.81 2.634-1.62.213-.54.355-1.282.355-3.104v-13.7c0-2.024-.64-2.969-2.135-3.441-.427-.068-.64-.135-.712-.203-.712-.202-1.068-.81-1.068-1.484 0-.54.356-1.08.926-1.283l12.6-4.859c.142-.135.427-.202.64-.202.641 0 .855.337.997 1.147zm-13.81-8.578c1.04-3.437 5.615-6.569 9.565-6.569 2.565 0 4.228 1.222 4.228 3.285 0 1.375-.901 3.132-2.287 4.43-2.01 1.986-5.06 3.285-7.416 3.285C100.663 69 99 67.778 99 65.792c0-.382.07-.84.208-1.223zm33.819 31.426l-.716.275c-1.574.62-2.29 1.447-2.29 2.136 0 1.24 1.36 1.653 5.581 1.653 1.288 0 4.222-.138 6.583-.207 2.504-.138 4.508-.207 6.153-.207 6.798 0 11.663 3.513 11.663 8.403 0 6.957-8.8 10.952-23.898 10.952-11.376 0-18.102-2.41-18.102-6.612 0-1.722 1.503-3.582 3.578-4.684l1.574-.826c.429-.276.787-.69.787-.896 0-.206-.215-.413-.859-.689-2.075-.757-3.22-2.066-3.22-3.719 0-.827.358-1.722.859-2.342a6.794 6.794 0 0 1 2.361-1.79c.572-.483 1.574-.758 2.719-1.31.787-.275 1.36-.481 1.646-.62.787-.275 1.144-.55 1.144-.688 0-.138-.286-.344-1.287-.62-4.222-1.24-7.012-4.752-7.012-9.023 0-7.439 7.012-11.916 18.531-11.916h.716c1.073 0 1.288-.069 1.502-.275.286-.138.43-.689.787-1.653.358-.827.501-1.309.644-1.722C143.543 66.86 146.55 65 149.911 65c3.435 0 5.724 1.584 5.724 3.926 0 1.722-1.073 2.548-3.434 2.548-.644 0-1.288-.137-1.86-.275l-1.646-.482c-.43-.207-1.002-.276-1.43-.276-1.217 0-2.362 1.033-2.362 2.273 0 .482.215.758.858.896 7.442 1.653 11.449 5.441 11.449 10.951 0 6.957-7.299 11.64-18.174 11.64h-.573c-.644 0-1.788-.068-3.434-.206-.43 0-.859-.069-1.073-.069-.143-.069-.286-.069-.501-.069-.072 0-.143 0-.43.138zM137.5 75c-4.13 0-6.5 2.983-6.5 8.068 0 4.949 2.302 7.932 6.432 7.932 4.063 0 6.568-2.983 6.568-7.797 0-5.084-2.505-8.203-6.5-8.203zm-1.151 29.62h-.685c-1.714 0-2.879-.077-6.854-.62-2.056 1.783-2.81 3.023-2.81 4.651 0 3.411 3.838 5.349 10.486 5.349 7.128 0 11.514-2.326 11.514-6.047 0-2.558-1.44-3.488-5.14-3.488-.343 0-.617 0-1.028.078l-5.483.077z" />
          </g>
        </svg>
      </Link>
    ) : (
      <div className={logoClasses}>
        <svg viewBox="0 0 164 119" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd">
            <path d="M4.33 9.512c0-4.032-.446-4.864-2.484-5.12C.382 4.2 0 3.752 0 2.664S.764 1 2.228 1h14.834c1.592 0 2.292.576 2.292 1.728 0 1.152-.255 1.408-1.91 1.664-1.783.256-2.037 1.088-2.037 5.12V37.8c0 3.904.636 4.48 4.329 4.48h4.075c3.82 0 6.302-.384 8.53-1.536 1.656-.832 2.866-1.792 5.412-4.288.637-.64 1.21-.896 1.592-.896.382 0 .764.128 1.018.384.446.32.637.768.637 1.152 0 .32-.191.704-.446 1.216l-5.793 9.408c-.7 1.152-.955 1.28-1.783 1.28-.7 0-1.082-.192-2.1-1.152-.828-.768-1.147-.832-2.547-.832H2.228C.7 47.016 0 46.44 0 45.288c0-1.024.382-1.472 1.846-1.664 2.038-.256 2.483-1.152 2.483-4.8V9.512zm51.162 7.566v22.568c0 3.107.515 3.867 2.898 4.438 1.224.253 1.61.697 1.61 1.521S59.356 47 58.261 47H42.803C41.708 47 41 46.43 41 45.542c0-.824.45-1.141 1.61-1.458 1.224-.317 1.997-.76 2.383-1.522.193-.507.322-1.204.322-2.916V26.777c0-1.902-.58-2.79-1.932-3.233-.386-.063-.58-.127-.644-.19-.644-.19-.966-.761-.966-1.395a1.3 1.3 0 0 1 .837-1.204l11.4-4.565c.129-.127.387-.19.58-.19.58 0 .773.317.902 1.078zM43.193 8.375C44.158 5.562 48.406 3 52.074 3 54.455 3 56 4 56 5.688c0 1.125-.837 2.562-2.124 3.625C52.01 10.937 49.178 12 46.99 12 44.545 12 43 11 43 9.375c0-.313.064-.688.193-1zm31.923-1.892v9.992h8.14c.387 0 .581.065.581.323 0 .129 0 .322-.129.515l-.904 2.386c-.194.515-.711.773-1.163.773h-5.685c-.517 0-.775.194-.775.903v18.76c0 2.514.904 3.546 3.036 3.546 1.292 0 2.584-.387 3.553-1.16.969-.774 1.486-1.097 1.873-1.097.776 0 1.357.58 1.357 1.354 0 .516-.323 1.032-.904 1.676C81.77 46.84 78.152 48 73.307 48c-5.361 0-8.914-1.87-8.914-4.706 0-.387 0-1.032.129-1.676.258-1.74.517-3.933.517-6.254v-13.99c0-.58-.388-.902-.84-.902h-2.842c-.905 0-1.357-.515-1.357-1.418 0-.903.452-1.547 2.003-2.514 3.294-2.063 7.752-6.576 10.077-10.122C72.661 5.322 73.178 5 73.89 5c.775 0 1.227.645 1.227 1.483zm25 0v9.992h8.14c.387 0 .581.065.581.323 0 .129 0 .322-.129.515l-.904 2.386c-.194.515-.711.773-1.163.773h-5.685c-.517 0-.775.194-.775.903v18.76c0 2.514.904 3.546 3.036 3.546 1.292 0 2.584-.387 3.553-1.16.969-.774 1.486-1.097 1.873-1.097.776 0 1.357.58 1.357 1.354 0 .516-.323 1.032-.904 1.676C106.77 46.84 103.152 48 98.307 48c-5.361 0-8.914-1.87-8.914-4.706 0-.387 0-1.032.129-1.676.258-1.74.517-3.933.517-6.254v-13.99c0-.58-.388-.902-.84-.902h-2.842c-.905 0-1.357-.515-1.357-1.418 0-.903.452-1.547 2.003-2.514 3.294-2.063 7.752-6.576 10.077-10.122C97.661 5.322 98.178 5 98.89 5c.775 0 1.227.645 1.227 1.483zM126.043.962v38.6c0 1.924 0 2.373.255 2.95.255.705 1.085 1.218 2.17 1.538 1.277.321 1.532.642 1.532 1.54 0 .833-.574 1.41-1.723 1.41h-14.554c-1.085 0-1.723-.577-1.723-1.475 0-.897.32-1.154 1.532-1.475 1.085-.32 1.787-.833 2.17-1.538.192-.577.255-1.219.255-3.014V11.093c0-2.18-.51-3.078-1.914-3.463-.383-.128-.575-.192-.639-.192-.574-.257-.957-.77-.957-1.41 0-.578.319-1.027.83-1.219L124.574.064c.192-.064.447-.064.575-.064.574 0 .766.192.894.962zm36.407 27.472l-19.18 6.248c-.581.127-.775.316-.775.568 0 .38.258 1.01.581 1.768 2.131 3.976 5.554 6.122 9.558 6.122 3.1 0 5.877-1.136 8.654-3.724.645-.568 1.098-.757 1.42-.757.775 0 1.292.568 1.292 1.325 0 .316-.258.947-.517 1.326-2.97 4.228-8.46 6.69-14.788 6.69C138.297 48 131 41.499 131 32.22c0-9.088 7.168-16.22 16.532-16.22 5.231 0 9.752 2.146 12.658 5.996a23.095 23.095 0 0 1 2.196 3.66c.452 1.01.645 1.579.645 2.02 0 .316-.193.632-.58.758zM140.102 31c.122 0 .306-.066.49-.133l9.673-3.447c.49-.199.735-.398.735-.73 0-.265-.245-1.193-.612-2.254-.368-1.06-.98-2.121-1.715-3.05-1.163-1.458-2.816-2.386-4.469-2.386-3.122 0-5.204 2.983-5.204 7.425 0 2.453.551 4.575 1.102 4.575zM24.951 71.338l2.379 3.033 2.378 2.863c.39.427.562.598.692.598.303 0 1.297-1.24 2.205-2.735 2.033-3.29 3.114-6.664 3.114-9.527 0-1.025-.087-1.623-.476-2.05l-.216-.257a.814.814 0 0 1-.173-.513c0-.427.908-1.281 1.773-1.794l1.124-.64c.303-.172.563-.257.735-.257.779 0 1.125.94 1.125 2.99 0 1.068-.216 2.692-.476 4.06-.346 1.623-.692 3.203-1.254 4.656-1.038 2.777-1.946 4.272-4.67 7.69-.13.128-.216.342-.39.47-.086.128-.13.214-.13.3 0 .17.217.512.606.854l2.854 2.734c.346.3.692.598 1.125.897.778.556 1.038.641 1.816.855.649.17.908.384.908.854 0 .598-.476.983-1.297.983h-8.476c-.562 0-.692-.043-1.081-.47l-1.34-1.367-.347-.342a.62.62 0 0 0-.259-.085c-.26 0-.39.042-.908.427C23.784 87.274 21.405 88 18.249 88 12.065 88 8 84.668 8 79.626c0-3.546 1.99-6.11 6.184-8.075.908-.427 1.038-.512 1.038-.683 0-.128-.13-.427-.433-.897-1.557-2.478-2.032-3.888-2.032-5.81 0-4.615 4.454-8.161 10.421-8.161 4.844 0 7.957 2.563 7.957 6.58 0 3.118-2.162 5.938-5.924 7.604-.606.257-.735.342-.735.513 0 .043.043.128.13.214l.345.427zM15 79.298c0 .206.044.454.044.702.443 2.851 2.876 5 5.797 5 1.194 0 2.345-.33 3.894-1.322.177-.124.265-.248.265-.372 0-.166-.177-.455-.62-.744-.176-.248-1.238-1.364-3.053-3.43a66.701 66.701 0 0 1-2.831-3.47c-.31-.497-.531-.662-.708-.662-.266 0-.531.165-.93.537C15.575 76.694 15 77.81 15 79.297zm5-16.636v.353c.173 1.544.993 3.573 2.029 4.764.13.133.259.221.388.221.216 0 1.123-.574 1.77-1.191.993-.883 1.813-2.735 1.813-4.191C26 60.544 24.748 59 23.065 59 21.295 59 20 60.5 20 62.662zM80.882 76.445C91.054 78.531 97 84.373 97 92.092 97 100.437 89.836 106 79.09 106H50.58c-1.72 0-2.579-.626-2.579-1.878 0-1.182.43-1.53 2.15-1.808 1.289-.208 1.79-.626 2.22-1.738.215-.835.286-1.043.286-3.894V65.249c0-4.173-.43-5.285-2.364-5.563-1.862-.278-2.149-.557-2.149-1.878 0-1.182.788-1.808 2.58-1.808h19.413c11.963 0 19.7 4.66 19.7 11.961 0 2.017-.716 3.964-2.077 5.285-1.433 1.53-2.937 2.156-6.877 3.2zM68.708 60C65.876 60 65 60.748 65 63.126v8.36c0 1.97.742 2.514 3.708 2.514C74.303 74 77 71.961 77 67.612 77 62.99 73.831 60 68.708 60zm.757 19C66.047 79 65 79.635 65 82.034V98.12c0 3.033 1.256 3.88 5.581 3.88C78.674 102 83 98.331 83 91.347 83 83.515 77.977 79 69.465 79zm43.552-5.853v24.025c0 3.307.57 4.116 3.203 4.724 1.353.27 1.78.742 1.78 1.62 0 .877-.712 1.484-1.922 1.484H98.993c-1.21 0-1.993-.607-1.993-1.552 0-.877.498-1.215 1.78-1.552 1.352-.338 2.206-.81 2.634-1.62.213-.54.355-1.282.355-3.104v-13.7c0-2.024-.64-2.969-2.135-3.441-.427-.068-.64-.135-.712-.203-.712-.202-1.068-.81-1.068-1.484 0-.54.356-1.08.926-1.283l12.6-4.859c.142-.135.427-.202.64-.202.641 0 .855.337.997 1.147zm-13.81-8.578c1.04-3.437 5.615-6.569 9.565-6.569 2.565 0 4.228 1.222 4.228 3.285 0 1.375-.901 3.132-2.287 4.43-2.01 1.986-5.06 3.285-7.416 3.285C100.663 69 99 67.778 99 65.792c0-.382.07-.84.208-1.223zm33.819 31.426l-.716.275c-1.574.62-2.29 1.447-2.29 2.136 0 1.24 1.36 1.653 5.581 1.653 1.288 0 4.222-.138 6.583-.207 2.504-.138 4.508-.207 6.153-.207 6.798 0 11.663 3.513 11.663 8.403 0 6.957-8.8 10.952-23.898 10.952-11.376 0-18.102-2.41-18.102-6.612 0-1.722 1.503-3.582 3.578-4.684l1.574-.826c.429-.276.787-.69.787-.896 0-.206-.215-.413-.859-.689-2.075-.757-3.22-2.066-3.22-3.719 0-.827.358-1.722.859-2.342a6.794 6.794 0 0 1 2.361-1.79c.572-.483 1.574-.758 2.719-1.31.787-.275 1.36-.481 1.646-.62.787-.275 1.144-.55 1.144-.688 0-.138-.286-.344-1.287-.62-4.222-1.24-7.012-4.752-7.012-9.023 0-7.439 7.012-11.916 18.531-11.916h.716c1.073 0 1.288-.069 1.502-.275.286-.138.43-.689.787-1.653.358-.827.501-1.309.644-1.722C143.543 66.86 146.55 65 149.911 65c3.435 0 5.724 1.584 5.724 3.926 0 1.722-1.073 2.548-3.434 2.548-.644 0-1.288-.137-1.86-.275l-1.646-.482c-.43-.207-1.002-.276-1.43-.276-1.217 0-2.362 1.033-2.362 2.273 0 .482.215.758.858.896 7.442 1.653 11.449 5.441 11.449 10.951 0 6.957-7.299 11.64-18.174 11.64h-.573c-.644 0-1.788-.068-3.434-.206-.43 0-.859-.069-1.073-.069-.143-.069-.286-.069-.501-.069-.072 0-.143 0-.43.138zM137.5 75c-4.13 0-6.5 2.983-6.5 8.068 0 4.949 2.302 7.932 6.432 7.932 4.063 0 6.568-2.983 6.568-7.797 0-5.084-2.505-8.203-6.5-8.203zm-1.151 29.62h-.685c-1.714 0-2.879-.077-6.854-.62-2.056 1.783-2.81 3.023-2.81 4.651 0 3.411 3.838 5.349 10.486 5.349 7.128 0 11.514-2.326 11.514-6.047 0-2.558-1.44-3.488-5.14-3.488-.343 0-.617 0-1.028.078l-5.483.077z" />
          </g>
        </svg>
      </div>
    )
  );
};

export default Logo;
