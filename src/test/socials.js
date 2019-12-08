class SocialList extends React.Component {
  render() {
    return (
        <div className="social-list">
          <h1> Список социальных у пользователя {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Facebook</li>
          </ul>
        </div>
    );
  }
}