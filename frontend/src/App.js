import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  Stack
} from "@mui/material";
import { 
  ShieldCheck, 
  Upload, 
  Users, 
  ShoppingBag, 
  ScanSearch, 
  Receipt 
} from "lucide-react";

// 별도 파일로 분리한 Analyze 컴포넌트 불러오기
import Analyze from "./Analyze";

const theme = createTheme({
  typography: {
    fontFamily: '"Pretendard", "Malgun Gothic", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h4: { fontWeight: 800 },
  },
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#111827",
    },
    secondary: {
      main: "#10b981",
    },
  },
});

const FeatureCard = ({ title, icon: Icon, description }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        borderRadius: 4, 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }
      }}
    >
      <CardContent sx={{ p: 4, textAlign: 'left' }}>
        <Box 
          sx={{ 
            width: 50, 
            height: 50, 
            borderRadius: 3, 
            bgcolor: 'rgba(16, 185, 129, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#10b981',
            mb: 2
          }}
        >
          <Icon size={24} />
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// 메인 화면 컴포넌트
function Home() {
  return (
    <>
      {/* 헤더 네비게이션 */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white/80', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Container maxWidth="lg" sx={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={1} component={Link} to="/" sx={{ textDecoration: 'none', color: 'black' }}>
            <Box sx={{ bgcolor: 'black', color: 'white', p: 0.5, borderRadius: 1, display: 'flex' }}>
              <ShieldCheck size={20} />
            </Box>
            <Typography variant="h6" fontWeight="bold">Unvail</Typography>
          </Stack>
          
          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/analyze" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: 500 }}>분석하기</Link>
            <Link to="/community" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: 500 }}>커뮤니티</Link>
            <Link to="/shop" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: 500 }}>착한기업 샵</Link>
          </Stack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          textAlign: "center",
          bgcolor: "background.default",
          backgroundImage: "linear-gradient(180deg, rgba(16, 185, 129, 0.05), transparent 300px)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.8, borderRadius: 10, border: 1, borderColor: 'grey.200', bgcolor: 'white', mb: 4 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981' }} />
            <Typography variant="caption" fontWeight="bold" color="text.secondary">AI 기반 제품 안전성 분석</Typography>
          </Box>

          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, lineHeight: 1.2, background: "linear-gradient(90deg, #111827 0%, #374151 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            제품 스크린샷으로<br />안전등급을 확인하세요
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 400, lineHeight: 1.6 }}>
            AI가 제품 정보를 분석하여 <strong>A~F 등급</strong>으로 안전성을 평가합니다.<br />신뢰할 수 있는 제품 선택을 위한 첫걸음
          </Typography>

          <Stack direction={{ xs: 'col', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 8 }}>
            <Button variant="contained" size="large" component={Link} to="/analyze" sx={{ bgcolor: 'black', px: 4, py: 1.5, borderRadius: 2, fontSize: '1rem', '&:hover': { bgcolor: '#333' } }} startIcon={<Upload size={20} />}>지금 분석하기</Button>
            <Button variant="outlined" size="large" component={Link} to="/community" sx={{ borderColor: 'grey.300', color: 'black', px: 4, py: 1.5, borderRadius: 2, fontSize: '1rem', '&:hover': { borderColor: 'black', bgcolor: 'transparent' } }} startIcon={<Users size={20} />}>커뮤니티 둘러보기</Button>
          </Stack>
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}><FeatureCard title="간편한 업로드" icon={Upload} description="SNS에서 본 과장 광고, 의심스러운 제품 정보를 캡처해서 올려주세요. OCR 기술이 텍스트를 자동 추출합니다." /></Grid>
            <Grid item xs={12} md={4}><FeatureCard title="AI 팩트체크" icon={ScanSearch} description="LLM AI가 성분 분석부터 리뷰 패턴까지 분석하여 신뢰도 등급(A~F)을 매겨드립니다." /></Grid>
            <Grid item xs={12} md={4}><FeatureCard title="내돈내산 인증" icon={Receipt} description="실제 구매 영수증으로 인증된 리뷰만 확인하세요. 광고 없는 클린한 커뮤니티를 보장합니다." /></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

// 최종 App 컴포넌트
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 분석 페이지 경로에 분리한 Analyze 컴포넌트 연결 */}
          <Route path="/analyze" element={<Analyze />} /> 
          <Route path="/community" element={<div>커뮤니티 페이지</div>} />
          <Route path="/shop" element={<div>착한기업 샵 페이지</div>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;