import React, { useState } from "react";
import { 
  Container, Box, Typography, TextField, Button, Stack, 
  InputAdornment, Checkbox, FormControlLabel 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, Lock, User } from "lucide-react";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    agree: false
  });

  const handleSignup = () => {
    // 필수 입력값 체크 로직
    if (!formData.email || !formData.name || !formData.password || !formData.agree) {
      alert("모든 정보를 입력하고 약관에 동의해주세요.");
      return;
    }
    
    // 사장님! 나중에 여기서 백엔드 가입 API를 호출할 거예요.
    alert("회원가입이 완료되었습니다! 로그인해주세요.");
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, mb: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* 상단 로고 */}
        <Box sx={{ bgcolor: 'black', color: 'white', p: 1.5, borderRadius: 2, display: 'inline-flex', mb: 2 }}>
          <ShieldCheck size={32} />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>시작해볼까요?</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          안전한 제품 정보를 공유하는 Unvail 커뮤니티에 합류하세요.
        </Typography>

        <Stack spacing={2.5} sx={{ width: "100%" }}>
          {/* 아이디(이메일) */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" fontWeight="bold" sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>아이디 (이메일)</Typography>
            <TextField fullWidth placeholder="example@email.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Mail size={18} color="#9ca3af" /></InputAdornment>,
                sx: { borderRadius: 2.5, bgcolor: '#f9fafb' }
              }}
            />
          </Box>

          {/* 이름 */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" fontWeight="bold" sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>이름</Typography>
            <TextField fullWidth placeholder="홍길동" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              InputProps={{
                startAdornment: <InputAdornment position="start"><User size={18} color="#9ca3af" /></InputAdornment>,
                sx: { borderRadius: 2.5, bgcolor: '#f9fafb' }
              }}
            />
          </Box>

          {/* 비밀번호 */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" fontWeight="bold" sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>비밀번호</Typography>
            <TextField fullWidth type="password" placeholder="영문, 숫자 포함 8자 이상" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              helperText="* 영문 대소문자, 숫자를 조합하여 8자 이상 입력해주세요."
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock size={18} color="#9ca3af" /></InputAdornment>,
                sx: { borderRadius: 2.5, bgcolor: '#f9fafb' }
              }}
            />
          </Box>

          {/* 약관 동의 */}
          <FormControlLabel
            control={<Checkbox checked={formData.agree} color="primary" onChange={(e) => setFormData({...formData, agree: e.target.checked})} />}
            label={<Typography variant="body2">(필수) 이용약관 및 개인정보 수집·이용에 동의합니다.</Typography>}
            sx={{ textAlign: 'left', mt: 1 }}
          />

          <Button variant="contained" fullWidth onClick={handleSignup}
            sx={{ bgcolor: "black", py: 1.8, borderRadius: 3, fontWeight: 700, mt: 2, "&:hover": { bgcolor: "#333" } }}>
            가입하기
          </Button>
        </Stack>

        <Typography variant="body2" sx={{ mt: 4 }}>
          이미 계정이 있으신가요? {" "}
          <Link to="/login" style={{ color: "black", fontWeight: 700, textDecoration: 'none' }}>로그인</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;