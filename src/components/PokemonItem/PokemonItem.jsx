import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import AvatarGroup from '@mui/material/AvatarGroup';

import("./PokemonItem.css");

const theme = createTheme({
  gridContainer:{
    paddingLeft: "5px",
    paddingRight:"5px"
  },
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#edf2ff",
    },
    text: {
      secondary: orange[500],
    },
  },
  typography: {
    body2: {
      fontSize: "1.1em",
    },
  },
});

function PokemonItem({ selectedPokemon }) {
  const pokemon = useSelector((store) => store.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(selectedPokemon)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

let z= 

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON" });
  }, []);

  if (!pokemon || pokemon.length === 0) {
    return <div>Please add members to your team!...</div>;
  }

  const getIcon = (type) => {
    switch (type) {
      case "normal":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwxu-4f2e91e3-184e-4b55-90e1-9a24d3a77ddb.png/v1/fit/w_600,h_1280,q_70,strp/normal_type_symbol_sinnoh_by_jormxdos_dffqwxu-300w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd4dS00ZjJlOTFlMy0xODRlLTRiNTUtOTBlMS05YTI0ZDNhNzdkZGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oUw4HYnDi0SSoZXy4mDEfUFeNY3vOjPfJU_sB-KjCzw";
      case "fire":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl1m-a992d76d-bfa4-41cd-bff6-7546b47f2184.png/v1/fit/w_600,h_1280/fire_type_symbol_galar_by_jormxdos_dffvl1m-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwxbS1hOTkyZDc2ZC1iZmE0LTQxY2QtYmZmNi03NTQ2YjQ3ZjIxODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DBmvPsi4hX6q3f8XHGcinkRbtbV2zsh5nB-_s9wse_4";
      case "water":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwyd-f2c7daf9-a780-400e-aa48-dd28e31f0ea8.png/v1/fit/w_600,h_1280,q_70,strp/water_type_symbol_sinnoh_by_jormxdos_dffqwyd-300w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5ZC1mMmM3ZGFmOS1hNzgwLTQwMGUtYWE0OC1kZDI4ZTMxZjBlYTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Bb9b-I6CagzSvpl7ZEfPwPcZ-brgTYoH1_ranRa-BjI";
      case "grass":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwys-bea7bc3f-f088-42aa-940b-9b430f4d8c39.png/v1/fit/w_600,h_1280/grass_type_symbol_sinnoh_by_jormxdos_dffqwys-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5cy1iZWE3YmMzZi1mMDg4LTQyYWEtOTQwYi05YjQzMGY0ZDhjMzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ktVlCZ3ZqbWchIKrwI7fD9P7uiVyfp1fMb7c5cX6l_A";
      case "electric":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwyh-61329514-fd15-4c9c-a34d-5082df139ea4.png/v1/fit/w_600,h_1280,q_70,strp/electric_type_symbol_sinnoh_by_jormxdos_dffqwyh-300w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5aC02MTMyOTUxNC1mZDE1LTRjOWMtYTM0ZC01MDgyZGYxMzllYTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.km5RW4XSSmtNMDi4BP3-akdvWC7hxEkxyj2fZQPHuBA";
      case "ice":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwz4-3d3ce1d6-e1c4-43f8-bade-d81ec63810e6.png/v1/fit/w_600,h_1280/ice_type_symbol_sinnoh_by_jormxdos_dffqwz4-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6NC0zZDNjZTFkNi1lMWM0LTQzZjgtYmFkZS1kODFlYzYzODEwZTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YFpAU0kl4PCsz_fS43Yf7i69wQSPwsgYW_Pm9YU495M";
      case "poison":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwzj-ae5158e3-e556-47a3-a2cb-1616d878f2ba.png/v1/fit/w_600,h_1280/poison_type_symbol_sinnoh_by_jormxdos_dffqwzj-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6ai1hZTUxNThlMy1lNTU2LTQ3YTMtYTJjYi0xNjE2ZDg3OGYyYmEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.y51FUUnxrVmfvSiTJtHejlSUODi2lCg752y7HQsGm_g";
      case "fighting":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwzc-0f53a076-1616-4e73-a563-b8087408c821.png/v1/fit/w_600,h_1280/fighting_type_symbol_sinnoh_by_jormxdos_dffqwzc-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6Yy0wZjUzYTA3Ni0xNjE2LTRlNzMtYTU2My1iODA4NzQwOGM4MjEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4QKJ9l_b8eWuD3oxND-BN4KmAYc-SbfSfF-mO-rxU9Q";
      case "flying":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx00-28f6a3fd-cbbb-47c2-bddf-ea39cb8afe46.png/v1/fit/w_600,h_1280/flying_type_symbol_sinnoh_by_jormxdos_dffqx00-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgwMC0yOGY2YTNmZC1jYmJiLTQ3YzItYmRkZi1lYTM5Y2I4YWZlNDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IIyxKo6z9--sCq8Nuo0oOlEfK2GT3v5ww1-j9YWvXhw";
      case "psychic":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx0d-1625502c-7f90-4ead-9535-34475d36d6e8.png/v1/fit/w_600,h_1280/psychic_type_symbol_sinnoh_by_jormxdos_dffqx0d-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgwZC0xNjI1NTAyYy03ZjkwLTRlYWQtOTUzNS0zNDQ3NWQzNmQ2ZTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpJxi2kZRn8QJ3LCitnyc5Gf1Pumko7K3jEzOZ-p2Bk";
      case "bug":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx0t-3e7a76c3-3809-47a7-896f-81b314124aac.png/v1/fit/w_600,h_1280/bug_type_symbol_sinnoh_by_jormxdos_dffqx0t-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgwdC0zZTdhNzZjMy0zODA5LTQ3YTctODk2Zi04MWIzMTQxMjRhYWMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8CEXUNUO--_krK9ulIq0crDdZMCwiiwrfwBR9fml-40";
      case "rock":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx12-f47a3644-381f-4309-b843-bfce4cf9af7a.png/v1/fit/w_600,h_1280/rock_type_symbol_sinnoh_by_jormxdos_dffqx12-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxMi1mNDdhMzY0NC0zODFmLTQzMDktYjg0My1iZmNlNGNmOWFmN2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SCrlfhApnlqe8shmMnSyzLGmm5hCDKX_DANH_8NQHUQ";
      case "ghost":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl2d-818164a9-f8e6-41fc-ba4e-c725e2be0d66.png/v1/fill/w_894,h_894/ghost_type_symbol_galar_by_jormxdos_dffvl2d-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwyZC04MTgxNjRhOS1mOGU2LTQxZmMtYmE0ZS1jNzI1ZTJiZTBkNjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YKEzh2shCheghxM31oOkuEOOrQlMeW1axtKAyK-Iceg";
      case "dark":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx1v-f3764e90-b1f6-432a-897e-a41e6c68628a.png/v1/fit/w_600,h_1280/dark_type_symbol_sinnoh_by_jormxdos_dffqx1v-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxdi1mMzc2NGU5MC1iMWY2LTQzMmEtODk3ZS1hNDFlNmM2ODYyOGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X3Zrd3fQsdbfJx6bXkSdiLKxdDAaT4iRjQheYvhRyGs";
      case "dragon":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx1k-50f1f0c0-06a0-4f13-a843-b1af269f0a67.png/v1/fit/w_600,h_1280/dragon_type_symbol_sinnoh_by_jormxdos_dffqx1k-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxay01MGYxZjBjMC0wNmEwLTRmMTMtYTg0My1iMWFmMjY5ZjBhNjcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qv3Y-5e2GEMFXswSWLezHOJ45uNRSjCo1ILtRHFMGlo";
      case "steel":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx26-3f3df840-e25d-4ea5-a69c-b285d65e80eb.png/v1/fit/w_600,h_1280/steel_type_symbol_sinnoh_by_jormxdos_dffqx26-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgyNi0zZjNkZjg0MC1lMjVkLTRlYTUtYTY5Yy1iMjg1ZDY1ZTgwZWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f9vXGx-05tBmZLnT8aj-W6kGCpf5GKbefWISqgKjGhA";
      case "fairy":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx2d-a0dfea1e-7899-45fa-9769-64eef178a09b.png/v1/fit/w_600,h_1280/fairy_type_symbol_sinnoh_by_jormxdos_dffqx2d-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgyZC1hMGRmZWExZS03ODk5LTQ1ZmEtOTc2OS02NGVlZjE3OGEwOWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.I5SlsJRSLWpbhw-FeEcXnd_4PmbyHORu6Jn6EdLiNk8";
      case "ground":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwzs-ad4d6ade-b780-4294-b87f-0de8aac6c625.png/v1/fit/w_600,h_1280/ground_type_symbol_sinnoh_by_jormxdos_dffqwzs-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6cy1hZDRkNmFkZS1iNzgwLTQyOTQtYjg3Zi0wZGU4YWFjNmM2MjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0n7DMDRCJTy_08vYa5spkxNTG8KU8lVAe_LsqPfz_b0"
             default:
        return "grey"; // Default color
    }
  };
  return selectedPokemon ? (
    <div>
       <div className="border" >
      <ThemeProvider theme={theme}>
     
        
            {/* <Grid container spacing={1}>  */}
            {/* display='flex' sx={{width: '100%'}} witem sm={1} lg={1} */}
           
            <Grid >
              <Grid >
                {/* This margin left is move the icon around on the card */}
              <CardHeader 
            avatar={
                  <Avatar src= {getIcon(selectedPokemon.type)}
                  sx={{marginLeft:30}}
                  >OP</Avatar>
                  
              }
    
             
                  
            
                  />
              <Card sx={{ width: 300 }} variant = "elevation">
                <CardMedia
                  sx={{ height: 280 }}
                  image={selectedPokemon.officalArt}
                  title={selectedPokemon.name}
                  // style={{ backgroundColor: "teal" }}
                  // raised="true"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {capitalizeFirstLetter(selectedPokemon.nickname)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {capitalizeFirstLetter(selectedPokemon.name)}
                  {" is "}
                    {capitalizeFirstLetter(selectedPokemon.type)}
                    {" type"}
                  
                  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
       
      
      </ThemeProvider>
       </div>
       </div>
  ) : (
    <div>loading</div>
  );
}

export default PokemonItem;