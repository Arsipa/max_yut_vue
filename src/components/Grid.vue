<template>
	<div class="grid">
		<div class="card-wrapper" v-for="(item, index) in list">
			<router-link :to="item.route" v-if="type === 'category'">
				<div class="card">
					<h3>{{ item.title }}</h3>
					<img :src="item.img" :alt="item.title" loading="lazy" />
				</div>
			</router-link>
			<a @click.prevent="showImage(index)" v-else>
				<div class="card">
					<img :src="item" loading="lazy" />
				</div>
			</a>

			<div class="popup-container" v-if="currentImage" @click.self="hideImage">
				<div class="popup">
					<img :src="currentImage" class="popup-image" />
					<button class="close-button" @click="hideImage">Закрыть</button>
					<button class="nav-button prev" @click="prevImage">˂</button>
					<button class="nav-button next" @click="nextImage">˃</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		list: Array,
		type: String,
	},
	data() {
		return {
			currentImage: null,
			currentIndex: 0,
			images: this.list,
		}
	},

	methods: {
		showImage(index) {
			this.currentImage = this.images[index]
			this.currentIndex = index
		},
		hideImage() {
			this.currentImage = null
		},
		prevImage() {
			if (this.currentIndex > 0) {
				this.currentIndex--
				this.showImage(this.currentIndex)
			}
		},
		nextImage() {
			if (this.currentIndex < this.images.length - 1) {
				this.currentIndex++
				this.showImage(this.currentIndex)
			}
		},
	},
}
</script>

<style scoped>
.nav-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: transparent;
	border: none;
	color: white;
	font-size: 24px;
	cursor: pointer;
}

.prev,
.next {
	font-size: 50px;
	mix-blend-mode: difference;
}

.prev {
	left: 10px;
}

.next {
	right: 10px;
}

.popup-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
}

.popup-image {
	max-height: 70vh;
	width: auto;
	height: auto;
}

.close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: transparent;
	border: none;
	color: white;
	font-size: 24px;
	cursor: pointer;
}

.grid {
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	flex-wrap: wrap;
}

.grid::after {
	content: '';
	width: 33.33%;
}

.card-wrapper {
	width: 33.33%;
	padding: 10px;
}

.card {
	height: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
}

h3 {
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 10px;
	text-transform: uppercase;
	color: black;
	display: flex;
	align-items: flex-end;
	flex-grow: 1;
}

img {
	object-fit: cover;
	border-radius: 10px;
	transition: 0.5s;
	height: 280px;
}

img:hover {
	filter: brightness(0.8);
}

@media screen and (max-width: 1250px) {
	.grid::after {
		content: '';
		width: 50%;
	}

	.card-wrapper {
		width: 50%;
		padding: 10px;
	}
}

@media screen and (max-width: 850px) {
	.card-wrapper {
		width: 100%;
		padding: 0;
		margin-bottom: 20px;
	}
}
</style>
