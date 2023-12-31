import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons, Feather} from '@expo/vector-icons';
import { COLORS, SIZES } from "../../constants";
import styles from './search.style';

const Search = () => {
	return (
		<SafeAreaView>
			<View style={styles.searchContainer}>
				<TouchableOpacity>
					<Ionicons style={styles.searchIcon} name="camera-outline" size={SIZES.xLarge} />
				</TouchableOpacity>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=""
						onPressIn={() => {}}
						placeholder="What are you looking for"
					/>
				</View>
				<View>
					<TouchableOpacity style={styles.searchBtn}>
						<Ionicons
							name="search"
							size={SIZES.xLarge}
							color={COLORS.offwhite}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Search;
