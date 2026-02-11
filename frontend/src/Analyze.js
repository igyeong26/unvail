import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  Stack 
} from "@mui/material";
import { 
  Upload, 
  Image as ImageIcon, 
  CheckCircle, 
  Zap 
} from "lucide-react";

const Analyze = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  // 사진 선택 시 미리보기 생성 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 로컬 환경에서 테스트하기 위해 임시 URL 생성
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* 타이틀 영역 */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="800" gutterBottom sx={{ color: "#111827" }}>
          제품 안전성 분석
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          제품 스크린샷을 업로드하면 AI가 자동으로 안전성을 분석합니다
        </Typography>
      </Box>

      {/* 업로드 박스 (메인 영역) */}
      <Card
        sx={{
          p: 6,
          border: "2px dashed #e5e7eb",
          borderRadius: 4,
          textAlign: "center",
          bgcolor: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          mb: 6
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="upload-button"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="upload-button">
          <Stack spacing={3} alignItems="center" sx={{ cursor: "pointer" }}>
            {previewUrl ? (
              <Box 
                component="img" 
                src={previewUrl} 
                sx={{ maxWidth: "100%", maxHeight: 350, borderRadius: 2, boxShadow: 3 }} 
              />
            ) : (
              <Box sx={{ bgcolor: "#f9fafb", p: 4, borderRadius: "50%", display: 'flex' }}>
                <Upload size={48} color="#9ca3af" />
              </Box>
            )}
            
            <Box>
              <Typography variant="h5" fontWeight="700" gutterBottom>
                스크린샷을 업로드하세요
              </Typography>
              <Typography variant="body1" color="text.secondary">
                드래그 앤 드롭 또는 클릭하여 파일을 선택하세요
              </Typography>
            </Box>

            <Button
              variant="contained"
              component="span"
              startIcon={<ImageIcon size={18} />}
              sx={{ 
                bgcolor: "#111827", 
                px: 5, 
                py: 1.5, 
                borderRadius: 2,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#374151" }
              }}
            >
              파일 선택
            </Button>
            
            <Typography variant="caption" color="text.secondary">
              지원 형식: JPG, PNG, WEBP (최대 10MB)
            </Typography>
          </Stack>
        </label>
      </Card>

      {/* 하단 안내 카드 그리드 */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
              <ImageIcon size={20} color="#6b7280" />
              <Typography variant="subtitle1" fontWeight="700">선명한 이미지</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              제품 정보와 성분표가 잘 보이는 선명한 스크린샷을 업로드하세요
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
              <CheckCircle size={20} color="#10b981" />
              <Typography variant="subtitle1" fontWeight="700">인증 마크</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              KC인증, 친환경 마크 등이 포함되면 더 정확한 분석이 가능합니다
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
              <Zap size={20} color="#f59e0b" />
              <Typography variant="subtitle1" fontWeight="700">빠른 분석</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              AI 분석은 보통 5~10초 내에 완료됩니다
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analyze;