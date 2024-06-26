import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import SettingModal from '../Modal/SettingModal/SettingModal';
import classes from './TopNavbar.module.css';
import boardIcon from '../../assets/boardIcon.svg';
import helpIcon from '../../assets/helpIcon.svg';
import settingIcon from '../../assets/settingIcon.svg';
import userIcon from '../../assets/userIcon.svg';
import testListIcon from '../../assets/testListIcon.svg';

function TopNavbar({ globalDarkMode }) {
  const [isServerOnline, setIsServerOnline] = useState(true);
  const [showSettingModal, setShowSettingModal] = useState(false);


  const handleShowSettingModal = () => {
    setShowSettingModal(true);
  };

  const handleCloseSettingModal = () => {
    setShowSettingModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className={`${globalDarkMode ? 'bg-dark navbar-dark' : 'bg-body-tertiary'} ${classes.navbar}`}>
        <Container className={classes.navbar_container}>
          <Navbar.Brand className={classes.brand} href='/'>Litmus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.navbar_content}>
              <Nav.Link className={classes.imgBox} href='/myTest'>
								<img className={classes.icon} src={testListIcon} alt="Test List" />
								시험목록
							</Nav.Link>
              <Nav.Link className={classes.imgBox}>
								<img className={classes.icon} src={boardIcon} alt="Board" />
								게시판
							</Nav.Link>
              <Nav.Link className={classes.imgBox}>
								<img className={classes.icon} src={helpIcon} alt="Help" />
								도움말
							</Nav.Link>
              <Nav.Link className={classes.imgBox} onClick={handleShowSettingModal}>
								<img className={classes.icon} src={settingIcon} alt="Settings" />
								설정
							</Nav.Link>
							<NavDropdown
                id="basic-nav-dropdown"
                title={<img className={classes.icon} src={userIcon} alt="User Info" />}
                className={classes.imgBox}
              >
                <NavDropdown.Item>마이페이지</NavDropdown.Item>
                <NavDropdown.Item>내 제출</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  로그아웃
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Stack direction="horizontal" gap={2}>
          <span>Server Status : </span>
          {isServerOnline ? <Badge bg="success">On</Badge> : <Badge bg="secondary">Off</Badge>}
        </Stack>
      </Navbar>
      <SettingModal show={showSettingModal} handleClose={handleCloseSettingModal} globalDarkMode={globalDarkMode} />
    </>
  );
}

export default TopNavbar;
