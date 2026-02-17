import React, { useState } from "react";
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  InputAdornment,
  Divider
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, Lock, MoveRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 사장님의 "단순 확인 로직" 적용
    if (email === "test@test.com" && password === "1234") {
      alert("로그인 성공!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box 
        sx={{ 
          mt: 12, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          textAlign: "center"
        }}
      >
        {/* 1. 상단 검정 로고 박스 */}
        <Box 
          sx={{ 
            bgcolor: 'black', 
            color: 'white', 
            p: 1.5, 
            borderRadius: 2, 
            display: 'inline-flex',
            mb: 2 
          }}
        >
          <ShieldCheck size={32} />
        </Box>

        {/* 2. 환영 문구 */}
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          반가워요!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
          Unvail 계정으로 로그인하여 신뢰된 소비를 시작하세요.
        </Typography>

        <Stack spacing={2.5} sx={{ width: "100%" }}>
          {/* 3. 이메일 입력창 (아이콘 포함) */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" fontWeight="bold" sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>
              이메일
            </Typography>
            <TextField 
              fullWidth 
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} color="#9ca3af" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2.5, bgcolor: '#f9fafb' }
              }}
            />
          </Box>

          {/* 4. 비밀번호 입력창 (아이콘 포함) */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" fontWeight="bold" sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>
              비밀번호
            </Typography>
            <TextField 
              fullWidth 
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={18} color="#9ca3af" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2.5, bgcolor: '#f9fafb' }
              }}
            />
          </Box>

          {/* 5. 로그인 버튼 (화살표 포함) */}
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleLogin}
            endIcon={<MoveRight size={20} />}
            sx={{ 
              bgcolor: "black", 
              py: 1.8, 
              borderRadius: 3, 
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'none',
              mt: 1,
              "&:hover": { bgcolor: "#333" } 
            }}
          >
            로그인
          </Button>
        </Stack>

        {/* 6. 하단 링크들 */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            아직 계정이 없으신가요? {" "}
            <Link to="/signup" style={{ color: "black", fontWeight: 700, textDecoration: 'none' }}>
              회원가입
            </Link>
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={2} 
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="center"
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            <Link to="/find-password" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85rem' }}>비밀번호 찾기</Link>
            <Link to="/support" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85rem' }}>고객센터</Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;